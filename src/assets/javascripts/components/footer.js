import {LitElement, html} from 'lit-element';

class FooterComponent extends LitElement {
  static get properties() {
    return {
      content: {type: String},
    };
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
