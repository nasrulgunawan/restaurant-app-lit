import { LitElement, html } from 'lit-element';
import { RESTAURANTS } from '../../../../data/restaurants';
import '../card/card';
import { mainStyle } from './style';
import { sharedStyle } from '../../shared/style';

class ContentComponent extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      subtitle: {type: String},
    };
  }

  static get styles() {
    return [
      sharedStyle,
      mainStyle,
    ];
  }

  constructor() {
    super();
    this.title = 'Daftar Restaurant';
    this.subtitle = 'Nikmati kebersamaan';
  }

  render() {
    return html`
      <main>
        <div class="container">
          <div class="content-header">
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>

          <div class="cards">
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
        </div>
      </main>
    `;
  }
}

customElements.define('x-content', ContentComponent);
