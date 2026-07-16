const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const img = lightbox.querySelector("img");

  document.querySelectorAll("main figure a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      img.src = link.href;
      img.alt = link.querySelector("img")?.alt ?? "";
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", () => lightbox.close());
}