
import { LitElement, html } from 'lit-element';
import { navbarStyle } from './style';
import logo from './logo.svg';

class NavbarComponent extends LitElement {
  static get properties() {
    return {
      isOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isOpen = false;
  }

  static get styles() {
    return [
      navbarStyle,
    ];
  }
  
  render() {
    return html`
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <img alt="Mamamyu Logo" width="75%" src="${logo}">
        </a>
        <button class="navbar-toggler"
                type="button"
                aria-label="Navigation Menu"
                @click="${this.collapseNavbar}">☰</button>
        <div class="navbar-collapse ${this.isOpen ? 'open' : null}">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">Favorite</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/nasrulgunawan" target="_blank" rel="noopener">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  collapseNavbar(e) {
    this.isOpen = !this.isOpen;
    e.stopPropagation();
  }
}

customElements.define('x-navbar', NavbarComponent);