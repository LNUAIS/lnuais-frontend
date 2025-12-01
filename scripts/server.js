const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // --- PROXY LOGIC ---
  // Forward API requests to the Spring Boot Backend
  // Default: localhost:8080, or use BACKEND_URL env var
  const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";
  const backendUrlObj = new URL(backendUrl);

  if (req.url.startsWith("/users") || req.url.startsWith("/logout") || req.url.startsWith("/oauth2")) {
    console.log(`[PROXY] Incoming request: ${req.method} ${req.url}`);
    const options = {
      hostname: backendUrlObj.hostname,
      port: backendUrlObj.port || (backendUrlObj.protocol === 'https:' ? 443 : 80),
      path: req.url,
      method: req.method,
      headers: {
        ...req.headers,
        host: backendUrlObj.host, // Override Host header to match backend
        origin: backendUrl, // Override Origin to bypass CSRF checks
        referer: backendUrl + '/', // Override Referer
      },
    };

    const proxyReq = http.request(options, (proxyRes) => {
      console.log(`[PROXY] Backend response: ${proxyRes.statusCode}`);
      if (proxyRes.headers['set-cookie']) {
        console.log(`[PROXY] Set-Cookie: ${proxyRes.headers['set-cookie']}`);
      }
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    req.pipe(proxyReq);

    proxyReq.on('error', (e) => {
      console.error(`[PROXY] Error connecting to backend: ${e.message}`);
      res.writeHead(502, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Proxy Error: Could not connect to backend at ${backendUrl}. ${e.message}` }));
    });
    return; // Stop execution here, don't serve static files
  }

  // --- STATIC FILE SERVING ---
  // Default to index.html for root path
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let filePath = parsedUrl.pathname === "/" ? "/index.html" : parsedUrl.pathname;

  // Build full path from project root
  filePath = path.join(__dirname, "..", filePath);

  // Get file extension
  const extname = path.extname(filePath);

  // Set content type based on file extension
  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
  };

  const contentType = contentTypes[extname] || "text/plain";

  // Read and serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - File Not Found</h1>", "utf-8");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`, "utf-8");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
