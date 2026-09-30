(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderTimeline(timelineRoot, items) {
    timelineRoot.textContent = "";
    var list = el("ol", "timeline__list");
    list.style.listStyle = "none";
    list.style.margin = "0";
    list.style.padding = "0";

    items.forEach(function (item, index) {
      var li = el("li", "timeline__item");
      li.setAttribute("data-id", item.id || String(index));
      li.setAttribute("data-role", item.aiRole || "");

      var head = el("div", "timeline__head");
      head.appendChild(el("time", "timeline__date", item.date));
      var role = el("span", "timeline__role", item.roleLabel || item.aiRole || "");
      role.setAttribute("data-role", item.aiRole || "");
      head.appendChild(role);

      var body = el("div", "timeline__body");
      body.appendChild(el("h3", "timeline__title", item.title));
      body.appendChild(el("p", "timeline__summary", item.summary));

      if (item.planDetails && item.planDetails.length) {
        var detailsId = "plan-" + (item.id || index);
        var wrap = el("div", "timeline__details");
        var btn = el("button", "timeline__toggle", "Show plan details");
        btn.type = "button";
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", detailsId);

        var panel = el("ul", "timeline__plan");
        panel.id = detailsId;
        panel.hidden = true;

        item.planDetails.forEach(function (d) {
          var row = el("li", "timeline__plan-row");
          row.appendChild(el("span", "timeline__plan-label", d.label));
          row.appendChild(el("span", "timeline__plan-text", d.text));
          panel.appendChild(row);
        });

        btn.addEventListener("click", function () {
          var open = panel.hidden;
          panel.hidden = !open;
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          btn.textContent = open ? "Hide plan details" : "Show plan details";
        });

        wrap.appendChild(btn);
        wrap.appendChild(panel);
        body.appendChild(wrap);
      }

      li.appendChild(head);
      li.appendChild(body);
      list.appendChild(li);
    });

    timelineRoot.appendChild(list);
  }

  function renderSources(sourcesRoot, items) {
    sourcesRoot.textContent = "";
    items.forEach(function (src) {
      var li = el("li", "source");
      var title = el("div", "source__title", src.displayText || src.label);
      li.appendChild(title);
      if (src.url) {
        var a = el("a", "source__link", src.url);
        a.href = src.url;
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        li.appendChild(a);
      } else {
        li.appendChild(el("p", "source__fallback", src.label || "Source (URL pending verification)"));
      }
      if (src.note) li.appendChild(el("p", "source__note", src.note));
      sourcesRoot.appendChild(li);
    });
  }

  function init() {
    var data = window.CASE_DATA || { timeline: [], sources: [] };
    var timelineRoot = document.getElementById("timeline-root");
    var sourcesRoot = document.getElementById("sources-root");

    if (timelineRoot) {
      if (data.timeline && data.timeline.length) {
        renderTimeline(timelineRoot, data.timeline);
      } else {
        timelineRoot.textContent = "Timeline data missing.";
      }
    }

    if (sourcesRoot) {
      if (data.sources && data.sources.length) {
        renderSources(sourcesRoot, data.sources);
      } else {
        sourcesRoot.textContent = "Sources missing.";
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* suspense fx: scroll reveal + title decode */
  function setupScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    var items = document.querySelectorAll(".timeline__item, .source, .hero__cta");
    items.forEach(function (n) { n.classList.add("will-reveal"); });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach(function (n) { io.observe(n); });
  }

  function decodeTitle() {
    var el = document.querySelector(".hero__title");
    if (!el) return;
    var final = el.textContent;
    var glyphs = "!<>-_\\\\[]{}—=+*^?#________";
    var frame = 0;
    var settled = 0;
    function tick() {
      var out = "";
      for (var i = 0; i < final.length; i++) {
        if (i < settled) out += final[i];
        else if (final[i] === " ") out += " ";
        else out += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      el.textContent = out;
      frame++;
      if (frame % 3 === 0) settled++;
      if (settled <= final.length) requestAnimationFrame(tick);
      else el.textContent = final;
    }
    requestAnimationFrame(tick);
  }

  function bootFx() {
    decodeTitle();
    setupScrollReveal();
    document.documentElement.classList.add("fx-on");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootFx);
  } else {
    bootFx();
  }
})();