// src/Authentication.test.js
import { html, fixture, expect } from '@open-wc/testing';
import './Authentication.js';

describe('AppAuthentication', () => {
  it('renders a form', async () => {
    const el = await fixture(html`<app-authentication></app-authentication>`);
    const form = el.shadowRoot.querySelector('form');
    expect(form).to.exist;
  });
});
