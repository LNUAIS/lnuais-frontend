const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // --- PROXY LOGIC ---
  // Forward API requests to the Spring Boot Backend
  // Change the IP below or set BACKEND_URL environment variable
  const backendUrl = process.env.BACKEND_URL || "http://lnuais-backend-env.eba-p9nw9zdb.eu-central-1.elasticbeanstalk.com";
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
      let responseBody = '';
      proxyRes.on('data', (chunk) => {
        responseBody += chunk;
      });

      proxyRes.on('end', () => {
        console.log(`[PROXY] Backend response: ${proxyRes.statusCode}`);
        if (proxyRes.headers['set-cookie']) {
          console.log(`[PROXY] Original Set-Cookie: ${proxyRes.headers['set-cookie']}`);
          const cookies = proxyRes.headers['set-cookie'].map(cookie => {
            let newCookie = cookie
              .replace(/Domain=[^;]+;?/gi, '')
              .replace(/Secure;?/gi, '')
              .replace(/SameSite=[^;]+;?/gi, '')
              .replace(/Path=[^;]+;?/gi, '');

            // Force Path=/
            if (!newCookie.endsWith(';')) newCookie += ';';
            newCookie += ' Path=/;';
            return newCookie;
          });
          proxyRes.headers['set-cookie'] = cookies;
          console.log(`[PROXY] Rewritten Set-Cookie: ${cookies}`);
        }
        // Log body for debugging
        if (req.url.startsWith("/users")) {
          console.log(`[PROXY] Body: ${responseBody}`);
        }

        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        res.end(responseBody);
      });
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
  const tryServe = (tryPath) => {
    fs.readFile(tryPath, (err, content) => {
      if (err) {
        if (err.code === "ENOENT") {
          // If original path failed, and it doesn't have an extension, try adding .html
          if (path.extname(tryPath) === '' && !tryPath.endsWith('.html')) {
            const htmlPath = tryPath + ".html";
            // Try serving with .html extension
            fs.readFile(htmlPath, (err2, content2) => {
              if (err2) {
                // Still not found
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 - File Not Found</h1>", "utf-8");
              } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content2, "utf-8");
              }
            });
          } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - File Not Found</h1>", "utf-8");
          }
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`, "utf-8");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  };

  tryServe(filePath);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
