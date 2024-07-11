// src/components/Footer.js
import { LitElement, html, css } from 'lit';

class AppFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 My Web App</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
