import { For, createSignal, onCleanup, onMount, type Component } from "solid-js";

export interface MenuItem {
  href: string;
  label: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { href: "events.html", label: "Events" },
  { href: "courses.html", label: "Courses" },
  { href: "news.html", label: "News" },
  { href: "about.html", label: "About" },
  { href: "signup.html", label: "Join Us" },
];

const useMenuState = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const menuState = () => (isOpen() ? "true" : "false");

  return { isOpen, toggle, close, menuState };
};

const Logo: Component = () => (
  <a href="/" data-astro-prefetch class="flex items-center size-18 mr-auto">
    <img src="/images/logo.svg" alt="Logo" class="w-14 md:w-20" />
  </a>
);

const HamburgerButton: Component<{ onClick: () => void; isOpen: boolean }> = (props) => (
  <button
    type="button"
    class="group flex flex-col items-center justify-center gap-1 md:hidden size-12"
    aria-label="Toggle menu"
    aria-expanded={props.isOpen ? "true" : "false"}
    aria-controls="primary-navigation"
    onClick={props.onClick}
  >
    <span class="h-0.5 w-6 rounded-full bg-white transition-transform duration-300 group-data-[open=true]:translate-y-[6px] group-data-[open=true]:rotate-45"></span>
    <span class="h-0.5 w-6 rounded-full bg-white transition-opacity duration-300 group-data-[open=true]:opacity-0"></span>
    <span class="h-0.5 w-6 rounded-full bg-white transition-transform duration-300 group-data-[open=true]:-translate-y-[6px] group-data-[open=true]:-rotate-45"></span>
  </button>
);

const MenuItem: Component<{ href: string; label: string; onClick: () => void }> = (props) => (
  <li class="item w-full md:w-auto">
    <a
      href={props.href}
      data-astro-prefetch
      class="block w-full px-6 py-4 text-base font-medium text-[#fcfbf8] transition hover:bg-white/10 md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-[#d0d0d0]"
      onClick={props.onClick}
    >
      {props.label}
    </a>
  </li>
);

const MobileNavigation: Component<{ isOpen: boolean; onItemClick: () => void; menuState: string }> = (props) => (
  <ul
    id="primary-navigation"
    class="fixed left-0 top-[4.5rem] z-40 flex w-full max-h-0 flex-col items-end overflow-hidden border-b border-[#303030] bg-[#141414]/95 text-right opacity-0 pointer-events-none backdrop-blur transition-[max-height,opacity,padding] duration-300 data-[open=true]:max-h-[480px] data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:py-2"
    data-open={props.menuState}
  >
    <For each={MENU_ITEMS}>
      {(item) => <MenuItem href={item.href} label={item.label} onClick={props.onItemClick} />}
    </For>
  </ul>
);

const DesktopNavigation: Component<{ onItemClick: () => void }> = (props) => (
  <ul class="hidden md:flex flex-row items-center justify-end gap-6">
    <For each={MENU_ITEMS}>
      {(item) => <MenuItem href={item.href} label={item.label} onClick={props.onItemClick} />}
    </For>
  </ul>
);

const NavigationMenu: Component<{ isOpen: boolean; onItemClick: () => void; menuState: string }> = (props) => (
  <div class="md:hidden">
    <MobileNavigation isOpen={props.isOpen} onItemClick={props.onItemClick} menuState={props.menuState} />
  </div>
);

const NavBar: Component = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  let navElement: HTMLElement | undefined;

  const setNavElement = (element: HTMLElement) => {
    navElement = element;
  };

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const menuState = () => (isMenuOpen() ? "true" : "false");

  const handleDocumentClick = (event: MouseEvent) => {
    if (!isMenuOpen() || !navElement) return;
    if (!navElement.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") setIsMenuOpen(false);
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
      class="sticky top-0 inset-x-0 z-50 flex h-[4.5rem] items-center justify-between border-b border-[#303030] bg-[#111111]/85 px-6 backdrop-blur-sm md:px-16"
      aria-label="Primary"
    >
      <Logo />
      <DesktopNavigation onItemClick={closeMenu} />
      <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen()} />
      <NavigationMenu isOpen={isMenuOpen()} onItemClick={closeMenu} menuState={menuState()} />
    </nav>
  );
};

export default NavBar;
