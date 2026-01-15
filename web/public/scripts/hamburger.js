const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const isPlainLeftMouseDown = (event) =>
  event.button === 0 &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey;

const closeMenu = () => {
  if (!hamburger || !menu) return;
  hamburger.dataset.open = "false";
  menu.dataset.open = "false";
  hamburger.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
  if (!hamburger || !menu) return;
  const isOpen = hamburger.dataset.open === "true";
  const nextState = (!isOpen).toString();
  hamburger.dataset.open = nextState;
  menu.dataset.open = nextState;
  hamburger.setAttribute("aria-expanded", nextState);
};

if (hamburger && menu) {
  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll(".item a").forEach((link) => {
    link.addEventListener("click", closeMenu);
    link.addEventListener("mousedown", (event) => {
      if (isPlainLeftMouseDown(event)) {
        closeMenu();
      }
    });
  });
}
