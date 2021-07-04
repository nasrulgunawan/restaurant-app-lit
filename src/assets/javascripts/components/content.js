import {LitElement, html} from 'lit-element';
import RESTAURANTS from '../../../data/restaurants.js';

class ContentComponent extends LitElement {
  static get properties() {
    return {
      heading: {type: String},
      tagline: {type: String},
    };
  }
  constructor() {
    super();
    this.heading = 'Temukan Restaurant Favoritmu disini.';
    this.tagline = 'Pilihan terbaik dengan penawaran menarik.';
  }

  render() {
    return html`
      <main id="main-content">
        <div class="container">
          <div class="content-header">
            <h1>Daftar Restaurant</h1>
            <p>Nikmati kebersamaan</p>
          </div>

          ${RESTAURANTS.map((restaurant) => {
            return html`
              <x-card>
                <img slot="img" src="${pictureId}" alt="Restaurant ${name}">
              </x-card>
            `;
          })}
        </div>
      </main>
    `;
  }
}

customElements.define('x-content', ContentComponent);
