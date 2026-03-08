document.addEventListener("DOMContentLoaded", function () {
  const closeAll = (entryRoot) => {
    entryRoot.querySelectorAll(".abstract.hidden.open, .bibtex.hidden.open, .award.hidden.open").forEach((el) => {
      el.classList.remove("open");
    });
  };

  document.querySelectorAll("ol.bibliography li").forEach((item) => {
    const root = item.querySelector('[id]');
    if (!root) return;

    item.querySelectorAll("a.abstract").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const panel = root.querySelector(".abstract.hidden");
        if (!panel) return;
        const willOpen = !panel.classList.contains("open");
        closeAll(root);
        if (willOpen) panel.classList.add("open");
      });
    });

    item.querySelectorAll("a.bibtex").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const panel = root.querySelector(".bibtex.hidden");
        if (!panel) return;
        const willOpen = !panel.classList.contains("open");
        closeAll(root);
        if (willOpen) panel.classList.add("open");
      });
    });
  });
});
