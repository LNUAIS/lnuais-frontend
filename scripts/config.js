// ============================================
// BACKEND CONFIGURATION
// Change BACKEND_IP to your backend server IP
// ============================================
const BACKEND_IP = '34.51.217.185'; // <-- Change this to your backend IP
const BACKEND_PORT = '8080';

const CONFIG = {
    // Helper to get the backend URL
    getApiBaseUrl: function () {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return `http://localhost:${BACKEND_PORT}`;
        } else {
            return `http://${BACKEND_IP}:${BACKEND_PORT}`;
        }
    }
};
