import { For, createSignal, onCleanup, onMount } from "solid-js";

const menuItems = [
  { href: "events.html", label: "Events" },
  { href: "courses.html", label: "Courses" },
  { href: "news.html", label: "News" },
  { href: "about.html", label: "About" },
];

export default function DashboardNavSolid() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  let navElement: HTMLElement | undefined;

  const setNavElement = (element: HTMLElement) => {
    navElement = element;
  };

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((previous) => !previous);
  const menuState = () => (isMenuOpen() ? "true" : "false");

  const handleDocumentClick = (event: MouseEvent) => {
    if (!isMenuOpen() || !navElement) {
      return;
    }

    if (!navElement.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  onMount(() => {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    onCleanup(() => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    });
  });

  return (
    <nav
      ref={setNavElement}
      class="fixed inset-x-0 top-0 z-50 flex h-[4.5rem] items-center justify-between border-b border-[#303030] bg-[#111111]/95 px-6 backdrop-blur-sm md:px-10"
      aria-label="Dashboard"
    >
      <a href="/" data-astro-prefetch class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="logo w-14 md:w-20" />
      </a>

      <div class="ml-auto flex items-center gap-4">
        <ul
          class="menu fixed left-0 top-[4.5rem] z-40 flex w-full max-h-0 flex-col items-end overflow-hidden border-b border-[#303030] bg-[#141414]/95 text-right opacity-0 pointer-events-none backdrop-blur transition-[max-height,opacity,padding] duration-300 data-[open=true]:max-h-[400px] data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:py-2 md:static md:z-auto md:max-h-none md:w-auto md:flex-row md:items-center md:justify-end md:gap-4 md:border-none md:bg-transparent md:text-left md:opacity-100 md:pointer-events-auto md:backdrop-blur-0 md:py-0 md:divide-y-0 md:divide-transparent divide-y divide-[#2b2b2b] py-0"
          data-open={menuState()}
        >
          <For each={menuItems}>
            {(item) => (
              <li class="item w-full md:w-auto">
                <a
                  href={item.href}
                  data-astro-prefetch
                  class="block w-full px-6 py-4 text-base font-medium text-[#fcfbf8] transition hover:bg-white/10 md:px-0 md:py-0 md:text-base md:hover:bg-transparent md:hover:text-[#d0d0d0]"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            )}
          </For>
        </ul>

        <div
          id="navbarProfile"
          class="navbar-profile hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10 md:flex"
        >
          <img
            id="navbarProfilePic"
            src=""
            alt="Profile"
            class="h-9 w-9 rounded-full border-2 border-[#ffe000] object-cover"
          />
          <div class="navbar-profile-text flex flex-col leading-tight">
            <div
              class="navbar-profile-name text-sm font-semibold text-white"
              id="navbarProfileName"
            >
              User
            </div>
            <button
              type="button"
              class="navbar-profile-logout text-[0.7rem] uppercase tracking-wide text-[#a1a1aa] transition hover:text-[#fc8181]"
              onclick="handleLogout(); return false;"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="group ml-4 flex flex-col items-center justify-center gap-1 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen()}
        aria-controls="dashboard-navigation"
        data-open={menuState()}
        onClick={toggleMenu}
      >
        <span class="h-0.5 w-6 rounded-full bg-white transition-transform duration-300 group-data-[open=true]:translate-y-[6px] group-data-[open=true]:rotate-45"></span>
        <span class="h-0.5 w-6 rounded-full bg-white transition-opacity duration-300 group-data-[open=true]:opacity-0"></span>
        <span class="h-0.5 w-6 rounded-full bg-white transition-transform duration-300 group-data-[open=true]:-translate-y-[6px] group-data-[open=true]:-rotate-45"></span>
      </button>
    </nav>
  );
}
