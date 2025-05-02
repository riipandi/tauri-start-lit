import { invoke } from '@tauri-apps/api/core'
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import tauriLogo from '../assets/tauri.svg'
import typescriptLogo from '../assets/typescript.svg'
import viteLogo from '../assets/vite.svg'

@customElement('view-home')
export class ViewHome extends LitElement {
  @state() private greetMsg = ''
  @state() private inputValue = ''

  render() {
    return html`
      <div class="container">
        <slot></slot>

        <div class="row">
          <a href="https://vitejs.dev" target="_blank">
            <img src=${viteLogo} class="logo vite" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src=${tauriLogo} class="logo tauri" alt="Tauri logo" />
          </a>
          <a href="https://www.typescriptlang.org/docs" target="_blank">
            <img
              src=${typescriptLogo}
              class="logo typescript"
              alt="typescript logo"
            />
          </a>
        </div>

        <p>Click on the Tauri logo to learn more about the framework</p>

        <div class="row">
          <input
            id="greet-input"
            placeholder="Enter a name..."
            .value=${this.inputValue}
            @input=${this._handleInput}
          />
          <my-button
            size="medium"
            variant="primary"
            @:click=${this._greet}
            part="button"
          >
            Greet
          </my-button>
        </div>
        <p id="greet-msg">${this.greetMsg}</p>
      </div>
    `
  }

  private _handleInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value
  }

  private async _greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    this.greetMsg = await invoke('greet', {
      name: this.inputValue,
    })
  }

  static styles = css`
    :host {
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      max-width: 56rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: var(--font-sans);
      color: var(--color-foreground);
    }

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
    }

    .logo {
      height: 6rem;
      padding: 1.5rem;
      will-change: filter;
      transition: filter 300ms;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em var(--color-primary));
    }

    .logo.vite:hover {
      filter: drop-shadow(0 0 2em #747bff);
    }

    .logo.tauri:hover {
      filter: drop-shadow(0 0 2em #24c8db);
    }

    .logo.typescript:hover {
      filter: drop-shadow(0 0 2em #3178c6);
    }

    input {
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border);
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: var(--color-background);
      color: var(--color-foreground);
      transition: all 0.25s;
    }

    input:focus {
      outline: 4px auto var(--color-ring);
      border-color: var(--color-primary);
    }

    #greet-msg {
      margin-top: 1rem;
      color: var(--color-primary);
      font-weight: 500;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'view-home': ViewHome
  }
}
