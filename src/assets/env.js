(function (window) {
  window.__env = window.__env || {};

  /**
   * ========================
   * ENVIRONMENT CONFIGURATION
   * ========================
   */
  
  // Define environment flags
  window.__env.isDevelopment = true;  // Set to true for Dev, false for Production
  window.__env.isProduction = false;  // Set to true for Production, false for Local

  /**
   * LOCAL DEVELOPMENT
   */
  if (window.__env.isDevelopment) {
    window.__env.apiUrl = "http://localhost:8080/api";
  }

  /**
   * PRODUCTION (AWS)
   */
  if (window.__env.isProduction) {
    window.__env.apiUrl = "http://YOUR_CLIENT_IP:8080/api";
  }

  // ======== ******** VERSION & DEBUGGING ******** =========
  window.__env.version = "Version: 1.0.0";
  window.__env.enableDebug = true;

}(this));