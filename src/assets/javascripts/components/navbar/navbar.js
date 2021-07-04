
import { LitElement, html } from 'lit-element';
import {navbarStyle} from './style';
import logo from '../../../images/logo.svg';

class NavbarComponent extends LitElement {
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

  clickHandler(e) {
    document
      .querySelector('.navbar-collapse')
      .classList
      .toggle('open');
    e.stopPropagation();
  }
}

customElements.define('x-navbar', NavbarComponent);