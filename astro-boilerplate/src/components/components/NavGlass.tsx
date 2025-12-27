import { createSignal, onMount, onCleanup } from "solid-js";

export const NavGlass = () => {
  const [scrolled, setScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [showGreeting, setShowGreeting] = createSignal(true);
  const [showMenu, setShowMenu] = createSignal(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen());
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Show greeting for 5 seconds, then transition to menu
    const timer = setTimeout(() => {
      setShowGreeting(false);
      setTimeout(() => {
        setShowMenu(true);
      }, 150); // Reduced delay for smoother transition
    }, 5000);

    onCleanup(() => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <>
      <nav class={`glass-nav ${scrolled() ? "scrolled" : ""} ${showGreeting() ? "greeting-mode" : ""} ${showMenu() ? "menu-mode" : ""}`}>
        <div class="glass-container">
          {/* Greeting Mode */}
          <div class={`glass-greeting ${showGreeting() ? "visible" : "hidden"}`}>
            <span>Hello, Friend!</span>
          </div>
          
          {/* Menu Mode */}
          <div class={`glass-menu-wrapper ${showMenu() ? "visible" : "hidden"}`}>
            <div class="glass-logo">
              <a href="/">GN</a>
            </div>
            
            <div class="glass-menu-container">
              <ul class={`glass-menu ${menuOpen() ? "open" : ""}`}>
                <li><a href="#" class="glass-link">Home</a></li>
                <li><a href="#" class="glass-link">About</a></li>
                <li><a href="#" class="glass-link">Work</a></li>
                <li><a href="#" class="glass-link">Contact</a></li>
              </ul>
              
              <div class="glass-cta">
                <button class="glass-button">Start</button>
              </div>
            </div>

            <button class="hamburger" onClick={toggleMenu} classList={{ active: menuOpen() }}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div class="glass-hero">
        <div class="glass-hero-content">
          <h1>Glassmorphism Navigation</h1>
          <p>Scroll to see the glass effect in action</p>
        </div>
      </div>

      <div class="glass-content">
        <section class="glass-section">
          <h2>Beautiful Glass Effects</h2>
          <p>This navigation bar features modern glassmorphism design with backdrop blur, transparency, and subtle animations. The navbar becomes more opaque as you scroll down the page.</p>
        </section>

        <section class="glass-section">
          <h2>Smooth Interactions</h2>
          <p>Hover over the navigation items and buttons to see the smooth transitions and micro-interactions. The glass effect creates depth and visual interest while maintaining readability.</p>
        </section>

        <section class="glass-section">
          <h2>Responsive Design</h2>
          <p>This component is fully responsive and works seamlessly across all device sizes. The glassmorphism effect adapts to different screen resolutions and maintains its visual appeal.</p>
        </section>

        <section class="glass-section">
          <h2>Modern Aesthetics</h2>
          <p>Glassmorphism is a popular design trend that combines transparency, blur effects, and subtle borders to create a modern, elegant interface. Perfect for contemporary web applications.</p>
        </section>
      </div>
    </>
  );
};