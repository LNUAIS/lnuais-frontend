// ============================================
// BACKEND CONFIGURATION
// Change BACKEND_IP to your backend server IP
// ============================================
const BACKEND_URL_PROD = 'http://lnuais-backend-env.eba-9eqmbpwn.eu-north-1.elasticbeanstalk.com';
const BACKEND_PORT_LOCAL = '5000';

const CONFIG = {
    // Helper to get the backend URL
    getApiBaseUrl: function () {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return `http://localhost:${BACKEND_PORT_LOCAL}`;
        } else {
            return BACKEND_URL_PROD;
        }
    }
};
