const CONFIG = {
    // Helper to get the backend URL
    getApiBaseUrl: function () {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return "http://localhost:8080";
        } else {
            // REPLACE THIS with your actual production backend URL
            return "https://api.your-production-domain.com";
        }
    }
};
