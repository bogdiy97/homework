// src/components/Header.js
import { LitElement, html, css } from 'lit';

class AppHeader extends LitElement {
  static styles = css`
    header {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Welcome to My Web App</h1>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
