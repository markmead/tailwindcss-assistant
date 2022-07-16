# Alpine JS Tailwind CSS Assistant

✅ Alpine JS plugin that helps you work with Tailwind CSS by...

- Show class names on current element
- Show current window width and breakpoint
- Toggle `xl`, `lg`, `md` and `sm` breakpoint classes on current element

## Toggle Classes

When you mouseover an element the class names will appear in the bottom right, once this is active you can press the following to toggle class names.

| Key       | Class Names |
| --------- | ----------- |
| SHIFT + S | `sm`        |
| SHIFT + M | `md`        |
| SHIFT + L | `lg`        |
| SHIFT + X | `xl`        |
| SHIFT + H | `2xl`       |

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-tailwindcss-assistant@latest/dist/assistant.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-tailwindcss-assistant

yarn add -D alpinejs-tailwindcss-assistant
```

Then you can register the plugin.

```js
import Alpine from 'alpinejs'
import assistant from 'alpinejs-tailwindcss-assistant'

Alpine.plugin(assistant)

window.Alpine = Alpine

Alpine.start()
```

### Stats 📊

![](https://img.shields.io/bundlephobia/min/alpinejs-tailwindcss-assistant)
![](https://img.shields.io/npm/v/alpinejs-tailwindcss-assistant)
![](https://img.shields.io/npm/dt/alpinejs-tailwindcss-assistant)
![](https://img.shields.io/github/license/markmead/alpinejs-tailwindcss-assistant)
