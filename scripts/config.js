// ============================================
// BACKEND CONFIGURATION
// Change BACKEND_IP to your backend server IP
// ============================================
const BACKEND_IP = 'http://lnuais-backend-env.eba-9eqmbpwn.eu-north-1.elasticbeanstalk.com/'; // <-- Change this to your backend IP
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
