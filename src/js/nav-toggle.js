const toggle = document.querySelector(".nav-toggle");
const sidebar = document.getElementById("sidebar");

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    sidebar.classList.toggle("is-open", !isOpen);
  });
}