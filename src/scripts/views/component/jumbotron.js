class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Laper ? Mau Yang Instan</h1>
        <p class="hero__tagline">Langsung Cek Rekomendasi Restaurant Yang Populer Ini</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-jumbotron', Jumbotron);
