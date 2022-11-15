class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <img src="./logo.png" alt="" />
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/Home">Home</a></li>
                <li><a href="#/Favorite">Favorite</a></li>
                <li><a href="https://github.com/GilbertDay" rel="noopener" target="_blank">About Us</a></li>
            </ul>
        </nav>

    `;
  }
}

customElements.define('app-bar', AppBar);
