# Connecting Frontend to Backend

## Quick Setup

To connect this frontend to your backend, change the backend IP in **one place**:

### `scripts/config.js`
Open `scripts/config.js` and change this line:
```javascript
const BACKEND_URL_PROD = 'http://lnuais-backend-env.eba-4mp5tntm.eu-north-1.elasticbeanstalk.com'; // <-- Change this to your backend IP
```

Replace `'http://lnuais-backend-env.eba-p9nw9zdb.eu-central-1.elasticbeanstalk.com'` with your actual backend IP address.

That's it! All requests will now use this IP.

---

## Running the Frontend

1. **Navigate to the Frontend folder**
```bash
cd Frontend
```

2. **Start the local server**
```bash
node scripts/server.js
```

3. **Open in browser**
```
http://localhost:3000/
```

---

## Environment Variable (Optional)

You can also override the backend IP using an environment variable without editing files:

**Windows (PowerShell):**
```powershell
$env:BACKEND_URL = 'http://YOUR_BACKEND_IP'
node scripts/server.js
```

**Linux/macOS:**
```bash
export BACKEND_URL='http://YOUR_BACKEND_IP'
node scripts/server.js
```

---

## Testing Connection

- Sign up with an email → verify code email should arrive
- Sign in with created account
- Check dashboard and other features

If you get "failed to fetch" errors:
1. Verify the backend IP is correct in `scripts/config.js`
2. Confirm backend is running and accessible
3. Check browser console (F12 → Network tab) for exact error
4. Ensure backend has CORS enabled for your frontend origin

---

## Troubleshooting

**Port 3000 already in use?**
```powershell
# Find process on port 3000
Get-NetTCPConnection -LocalPort 3000 | Select-Object -ExpandProperty OwningProcess

# Kill it (replace <PID> with the number above)
Stop-Process -Id <PID> -Force
```

**Backend not responding?**
Test directly:
```powershell
curl.exe http://YOUR_BACKEND_IP/
```

If you get a response, backend is running. If not, verify the IP and port.
