# Starlight Tailwind Variants Design System

Multi-Framework Design System built with Tailwind Variants

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/WinstonFassett/try-starlight-tailwind-variants)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/WinstonFassett/try-starlight-tailwind-variants)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/WinstonFassett/try-starlight-tailwind-variants&create_from_path=examples/tailwind)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%WinstonFassett%2Ftry-starlight-tailwind-variants&project-name=my-starlight-tailwind-variants&repository-name=my-starlight-tailwind-variants)

## 📖 Documentation

Visit the [full documentation site](https://winstonfassett.github.io/try-starlight-tailwind-variants/) for complete guides, component references, and examples.

## 🚀 Quick Start

### React

```bash
npm install starlight-tailwind-variants react react-dom @types/react @types/react-dom
```

```tsx
import { Button } from '@/components/ui/Button'

export function App() {
  return (
    <Button color="primary" size="lg">
      Click me!
    </Button>
  )
}
```

### Svelte

```bash
npm install starlight-tailwind-variants svelte @astrojs/svelte
```

```svelte
<script>
  import Button from '@/components/ui/Button.svelte'
</script>

<Button color="primary" size="lg">
  Click me!
</Button>
```

### Astro

```bash
npm install starlight-tailwind-variants
npx astro add tailwind
```

```astro
---
import Button from '@/components/ui/Button.astro'
---

<Button color="primary" size="lg">
  Click me!
</Button>
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🏗️ Project Structure

The project is organized to support multiple frameworks with shared design tokens:

```
.
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   └── ui/                      # UI Components
│   │       ├── theme/               # Core theme definitions (Tailwind Variants)
│   │       │   ├── button.ts        # Button theme variants
│   │       │   ├── input.ts         # Input theme variants
│   │       │   ├── badge.ts         # Badge theme variants
│   │       │   └── card.ts          # Card theme variants
│   │       ├── Button.tsx           # React Button component
│   │       ├── Button.astro         # Astro Button component
│   │       ├── Button.svelte        # Svelte Button component
│   │       ├── Input.tsx            # React Input component
│   │       ├── Input.astro          # Astro Input component
│   │       └── Input.svelte         # Svelte Input component
│   ├── content/
│   │   ├── docs/
│   │   │   ├── guides/              # Framework-specific guides
│   │   │   │   ├── react.mdx        # React integration guide
│   │   │   │   ├── svelte.mdx       # Svelte integration guide
│   │   │   │   └── astro.mdx        # Astro integration guide
│   │   │   └── reference/           # Component documentation
│   │   │       ├── Button.mdx       # Button component docs
│   │   │       ├── Input.mdx        # Input component docs
│   │   │       └── Badge.mdx        # Badge component docs
│   │   └── config.ts                # Content configuration
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   ├── tailwind.css                 # Tailwind base styles
│   └── env.d.ts                     # TypeScript environment types
├── astro.config.mjs                 # Astro configuration
├── tailwind.config.mjs              # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies and scripts
```

### Architecture Overview

- **`src/components/ui/theme/`**: Core design system definitions using Tailwind Variants. These files contain the shared styling logic that all framework components use.

- **`src/components/ui/`**: Framework-specific component implementations. Each component (Button, Input, etc.) has versions for React (`.tsx`), Astro (`.astro`), and Svelte (`.svelte`).

- **`src/content/docs/guides/`**: Framework-specific integration guides showing how to install and use the design system in each framework.

- **`src/content/docs/reference/`**: Component documentation with live examples for all supported frameworks.

This structure ensures consistency across frameworks while allowing each to leverage its specific features and patterns.

## 🎨 Features

- **Multi-Framework Support**: Components for React, Svelte, and Astro
- **Tailwind Variants**: Consistent styling with powerful variant system
- **TypeScript**: Full type safety across all frameworks
- **Dark Mode**: Built-in dark mode support
- **Accessible**: Components built with accessibility in mind
- **Customizable**: Easy to extend and customize for your needs

## 👀 Want to learn more?

Check out the [full documentation](https://winstonfassett.github.io/try-starlight-tailwind-variants/), [Starlight's docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).