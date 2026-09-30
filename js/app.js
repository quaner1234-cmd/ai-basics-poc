(function () {
  "use strict";

  function init() {
    var data = window.CASE_DATA || { timeline: [], sources: [] };
    var timelineRoot = document.getElementById("timeline-root");
    var sourcesRoot = document.getElementById("sources-root");

    if (timelineRoot && data.timeline && data.timeline.length) {
      timelineRoot.textContent = "";
      // slice 2 renders nodes
    }

    if (sourcesRoot && data.sources && data.sources.length) {
      sourcesRoot.textContent = "";
      // slice 4 renders sources
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
