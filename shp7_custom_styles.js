(function () {

    const testCSS = `
      /* Tab headers */
      .tab-header {
        background: #34304f !important;
        color: #e4dca8 !important;
        border: 2px solid #527b78 !important;
      }

      /* Entity rows */
      .entity-row {
        background: #24212f !important;
        border: 2px solid #304b49 !important;
      }

      /* PRESS buttons */
      button,
      .btn {
        background: #458f88 !important;
        color: #fff1d0 !important;
        border: 2px solid #a27ba8 !important;
        border-radius: 6px !important;
      }

      /* Dropdowns */
      select {
        background: #29213f !important;
        color: #e4dca8 !important;
        border: 2px solid #527b78 !important;
        border-radius: 4px !important;
      }

      /* Number and time value boxes */
      input[type="number"],
      input[type="time"] {
        background-color: #713d42 !important;
        color: #ffe3b3 !important;
        border: 2px solid #8c6669 !important;
        border-radius: 4px !important;
      }

      /* Left-hand entity icons */
      .entity-row > div:first-child {
        color: #b58bc9 !important;
      }
    `;


  function injectStyle(root) {
    if (root.querySelector("#shp7-custom-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "shp7-custom-style";
    style.textContent = testCSS;
    root.appendChild(style);
  }

  function scan(element) {
    if (!element) return;

    if (element.shadowRoot) {
      injectStyle(element.shadowRoot);

      scan(element.shadowRoot);
    }

    if (element.children) {
      Array.from(element.children).forEach(scan);
    }
  }

  function start() {
    scan(document.body);

    const observer = new MutationObserver(() => {
      scan(document.body);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
