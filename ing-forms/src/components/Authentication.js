// src/components/Authentication.js
import { LitElement, html, css } from 'lit';
import { define } from '@lion/input';

import '@lion/button/define';

class AppAuthentication extends LitElement {
  static styles = css`
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <form @submit="${this._handleSubmit}">
          <lion-input name="username" label="Username"></lion-input>
          <lion-input type="password" name="password" label="Password"></lion-input>
          <lion-button type="submit">Login</lion-button>
        </form>
      </div>
    `;
  }

  _handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
  }
}

customElements.define('app-authentication', AppAuthentication);
