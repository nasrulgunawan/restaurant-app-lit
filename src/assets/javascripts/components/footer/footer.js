import { LitElement, html } from 'lit-element';
import { sharedStyle } from '../../shared/style';
import { footerStyle } from './style';

class FooterComponent extends LitElement {
  static get properties() {
    return {
      content: {type: String},
    };
  }

  static get styles() {
    return [
      sharedStyle,
      footerStyle,
    ];
  }

  constructor() {
    super();
    this.content = 'Copyright © 2021 - Mamamyu';
  }

  render() {
    return html`
      <footer class="text-center">${this.content}</footer>
    `;
  }
}

customElements.define('x-footer', FooterComponent);
