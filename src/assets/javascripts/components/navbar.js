
import {LitElement, html} from 'lit-element';

class NavbarComponent extends LitElement {
  render() {
    return html`
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <img alt="Mamamyu Logo" width="75%" src="">
        </a>
        <button class="navbar-toggler"
                type="button"
                aria-label="Navigation Menu">☰</button>
        <div class="navbar-collapse">
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
}

customElements.define('x-navbar', NavbarComponent);
