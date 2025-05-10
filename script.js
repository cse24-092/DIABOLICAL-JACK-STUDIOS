<script>
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  // Contact form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }

  // Gallery image zoom
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 1000;

      const zoomImg = document.createElement("img");
      zoomImg.src = img.src;
      zoomImg.style.maxWidth = "90%";
      zoomImg.style.maxHeight = "90%";
      zoomImg.style.borderRadius = "10px";

      overlay.appendChild(zoomImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
</script>
document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
    });
  }

  // Contact form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }

  // Simple image zoom effect on gallery page
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 1000;

      const zoomImg = document.createElement("img");
      zoomImg.src = img.src;
      zoomImg.style.maxWidth = "90%";
      zoomImg.style.maxHeight = "90%";
      zoomImg.style.borderRadius = "10px";

      overlay.appendChild(zoomImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
