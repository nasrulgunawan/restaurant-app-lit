import {LitElement, html} from 'lit-element';
import {RESTAURANTS} from '../../../data/restaurants';
import '../components/card';

class ContentComponent extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      subtitle: {type: String},
    };
  }
  constructor() {
    super();
    this.title = 'Daftar Restaurant';
    this.subtitle = 'Nikmati kebersamaan';
  }

  render() {
    return html`
      <main id="main-content">
        <div class="container">
          <div class="content-header">
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>

          ${RESTAURANTS.map(({
              id, city, name, description, rating, distance, pictureId,
            }) => {
              return html`
                <x-card>
                  <img slot="img" src="${pictureId}" alt="Restaurant ${name}">
                  <div slot="text" class="card-text">
                    <p class="text-small">${city}</p>
                    <p class="card-title">${name}</p>
                    <p class="card-description">${description}</p>
                  </div>
                  <span slot="rating">${rating}</span>
                  <span slot="distance" class="text-small">${distance} km</span>
                </x-card>
              `;
          })}
        </div>
      </main>
    `;
  }
}

customElements.define('x-content', ContentComponent);
