# ⚡️ Tauri Start Lit

[![Contribution welcome](https://img.shields.io/badge/Contributions-welcome-gray.svg)](https://github.com/riipandi/tauri-start-lit/pulse)
[![Rust version](https://img.shields.io/badge/rust-v1.77-FF5500.svg?logo=rust)](https://www.rust-lang.org)
[![Tauri version](https://img.shields.io/badge/Tauri-v2-00aaff.svg?logo=tauri)](https://tauri.app)
![Repo Size](https://img.shields.io/github/repo-size/riipandi/tauri-start-lit)
<!-- [![CI Test](https://github.com/riipandi/tauri-start-lit/actions/workflows/test.yml/badge.svg)](https://github.com/riipandi/tauri-start-lit/actions/workflows/test.yml) -->

---

This project template should help get you started developing a multi-platform desktop application
using Tauri, Web Components (powered by Lit), CSS, TypeScript, and Vite.

The template provides a minimal but functional setup with proper Rust-JS interop demonstrated
through the greeting example. It's perfect for developers who prefer lightweight web components
over full frameworks.

## Quick Start

```sh
pnpm dlx tiged riipandi/tauri-start-lit my-app
```

1. Install required toolchains: [Rust][rust], [Node.js][nodejs], and [PNPM][pnpm].
2. Replace the project name in the [`package.json`](./package.json), [`Cargo.toml`](./src-tauri/Cargo.toml),
   and [`tauri.conf.json`](./src-tauri/tauri.conf.json) files.
3. Find and replace `tauri-start-lit`, `tauri_start_lit` and `Tauri App` strings in the source files.
4. Set application identifier and other application metadata in [`tauri.conf.json`](./src-tauri/tauri.conf.json) file.
5. Install frontend dependencies by running `pnpm install`.
6. Run `pnpm dev` to start developing.

To build the application, run `pnpm build`. You can also run `pnpm build:debug`
to build the application in debug mode, this will enable developer tools.

## What's Inside?

- [x] Tauri v2 + Lit + TypeScript integration
- [x] Built-in router for multi-page applications
- [x] Optimized CSS with Lightning CSS
- [x] Themeable component system with OKLCH colors
- [x] Storybook for developing user interface

## Recommended IDE Setup

[Visual Studio Code](https://code.visualstudio.com/) + [Recomended extensions](./.vscode/extensions.json)

### Fix Unsigned Warning (macOS)

> Warning: "Tauri App" is damaged and can't be opened.

This warning is shown because the build is not signed. Run the following command
 to suppress this warning:

```sh
xattr -r -d com.apple.quarantine "/Applications/Tauri App.app"
```

## License

Licensed under either of [Apache License 2.0][license-apache] or [MIT license][license-mit] at your option.

> Unless you explicitly state otherwise, any contribution intentionally submitted
> for inclusion in this project by you, as defined in the Apache-2.0 license, shall
> be dual licensed as above, without any additional terms or conditions.

Copyrights in this project are retained by their contributors.

See the [LICENSE-APACHE](./LICENSE-APACHE) and [LICENSE-MIT](./LICENSE-MIT) files
for more information.

[rust]: https://www.rust-lang.org/tools/install
[lit]: https://lit.dev
[biome]: https://biomejs.dev
[nodejs]: https://nodejs.org/en/download
[pnpm]: https://pnpm.io/installation
[riipandi-twitter]: https://twitter.com/intent/follow?screen_name=riipandi
[license-mit]: https://choosealicense.com/licenses/mit/
[license-apache]: https://choosealicense.com/licenses/apache-2.0/

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>

[![Made by](https://badgen.net/badge/icon/Made%20by%20Aris%20Ripandi?icon=bitcoin-lightning&label&color=black&labelColor=black)][riipandi-twitter]
