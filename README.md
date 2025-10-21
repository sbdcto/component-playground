# 🚀 Next.js Template

[![Version](https://img.shields.io/badge/version-0.1.1-blue.svg)](https://github.com/your-username/next-template)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)

> A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and essential developer tools pre-configured.

## ✨ Features

### 🎨 **Modern UI Stack**
- **Next.js 15.5.2** with Turbopack for lightning-fast development
- **React 19** with the latest features and improvements
- **Tailwind CSS 4** for utility-first styling with PostCSS integration
- **Radix UI** components for accessible, unstyled UI primitives
- **Lucide React** icons for beautiful, customizable icons
- **CVA (Class Variance Authority)** for component variant management

### 🛠️ **Developer Experience**
- **TypeScript 5.9** for type safety and better DX
- **Bun** as the package manager for faster installations
- **Husky** for Git hooks automation
- **Lint-staged** for running linters on staged files
- **Knip** for detecting unused dependencies and exports
- **Ultracite** for advanced code formatting and linting

### 📋 **Form Handling & State Management**
- **React Hook Form** with **Zod** validation for robust form handling
- **Zustand** for lightweight state management
- **@hookform/resolvers** for seamless form validation integration

### 🎯 **Animation & Styling**
- **tw-animate-css** for Tailwind-compatible animations
- **tailwind-merge** and **clsx** for dynamic class composition
- Responsive design patterns out of the box

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 22.14.0
- **Bun**: >= 1.2.21 (recommended package manager)

### Installation

1. **Clone or use this template:**
   ```bash
   git clone https://github.com/your-username/next-template.git
   cd next-template
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server with Turbopack |
| `bun run build` | Build the application for production with Turbopack |
| `bun run start` | Start the production server |
| `bun run check:knip` | Check for unused dependencies and exports |
| `bun run check:fix` | Run Ultracite formatting and linting |
| `bun run check:all` | Run all checks (knip + ultracite) |

## 🏗️ Project Structure

```
next-template/
├── .github/            # GitHub workflows and templates
├── .husky/            # Git hooks configuration
├── .vscode/           # VS Code settings and configurations
├── node_modules/      # Dependencies (auto-generated)
├── public/            # Static assets and public files
└── src/               # Source code
    ├── app/           # Next.js App Router
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/    # Reusable React components
    │   ├── AppSidebar/
    │   ├── Header/
    │   └── ui/       # UI components (Radix + Tailwind)
    └── hooks/        # Custom React hooks
├── .gitignore        # Git ignore patterns
├── bun.lockb        # Bun lock file
├── components.json  # shadcn/ui configuration
├── next.config.ts   # Next.js configuration
├── package.json     # Dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md        # Project documentation
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## ⚙️ Configuration

### Tailwind CSS
The template includes Tailwind CSS 4 with PostCSS integration. The configuration supports:
- Custom color schemes
- Responsive breakpoints
- Animation utilities via `tw-animate-css`
- Component variants with CVA

### TypeScript
Strict TypeScript configuration with:
- Path mapping for clean imports
- Latest ECMAScript target
- Optimized for Next.js App Router

### Bun Package Manager
This template is optimized for Bun, providing:
- Faster dependency installation
- Native TypeScript support
- Improved development server performance

### Git Hooks (Husky)
Pre-configured Git hooks for:
- Pre-commit linting and formatting
- Automated code quality checks
- Consistent code style enforcement

## 🧩 Key Dependencies

### Core Framework
- `next`: ^15.5.2 - React framework with hybrid rendering
- `react`: ^19.1.1 - UI library
- `react-dom`: ^19.1.1 - React DOM renderer
- `typescript`: ^5.9.2 - Type safety and developer experience

### UI & Styling
- `@tailwindcss/postcss`: ^4.1.13 - Utility-first CSS framework
- `@radix-ui/*`: Various - Unstyled, accessible UI primitives
- `lucide-react`: ^0.542.0 - Beautiful icon library
- `class-variance-authority`: ^0.7.1 - Component variants
- `tailwind-merge`: ^3.3.1 - Conditional class merging
- `clsx`: ^2.1.1 - Conditional classnames utility

### Forms & Validation
- `react-hook-form`: ^7.62.0 - Performant forms with validation
- `@hookform/resolvers`: ^5.2.1 - Form validation resolvers
- `zod`: ^4.1.5 - Schema validation library

### State Management
- `zustand`: ^5.0.8 - Small, fast, and scalable state management

### Development Tools
- `husky`: ^9.1.7 - Git hooks
- `lint-staged`: ^16.1.6 - Run linters on staged files
- `knip`: ^5.63.1 - Detect unused dependencies
- `ultracite`: 5.3.4 - Advanced linting and formatting

## 🔧 Customization

### Adding New Components
Create components in `src/components/` following the established patterns:
```typescript
// src/components/ui/button.tsx
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

## 👤 Author

**Save Ducto**
- Email: ducto.save@gmail.com
- GitHub: [@sbdcto](https://github.com/sbdcto)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for deployment and hosting solutions
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Radix UI](https://www.radix-ui.com/) for accessible components
- The open-source community for continuous innovation

---
