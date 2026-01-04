# 🌍 SHRI INTERWORKS - European Manpower Solutions

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Connecting skilled Asian talent with European opportunities**

[View Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## 🎯 About The Project

**SHRI INTERWORKS SRL** is a modern, full-stack web application built with Next.js 16 and React 19, designed to connect skilled Asian workers with European employers. The platform specializes in international recruitment across multiple industries including construction, hospitality, shipbuilding, metalworking, and more.

This project features a stunning, responsive UI with:
- ✨ Glassmorphism design patterns
- 🌐 Multi-language support (English, Romanian, Spanish, German, French)
- 📱 Mobile-first, fully responsive layout
- 🎨 Modern animations and smooth transitions
- ♿ Accessibility-focused components
- 🌓 Dark/light theme support ready

---

## ✨ Key Features

### 🌐 Multi-Language Support
- **5 Languages**: English, Romanian, Spanish, German, and French
- Dynamic language switching without page reload
- Comprehensive translation system
- Locale-aware content rendering

### 🎨 Modern UI/UX
- **Glassmorphism Effects**: Beautiful glass card components
- **Smooth Animations**: Framer Motion integration ready
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Dark Mode Ready**: Theme provider included

### 📄 Core Pages
- **Home**: Hero section with service showcase
- **About**: Company information and mission
- **Services**: Detailed industry-specific services
- **Contact**: Interactive contact form with validation

### 🛠️ Industry Services
- 🏗️ Construction & Engineering
- 🍽️ Hospitality & Tourism
- ⚓ Shipbuilding & Marine
- 🔧 Metalworking & Manufacturing
- 🧵 Textile & Garment
- 🌾 Agriculture & Farming
- 🍖 Food Processing
- 🪑 Furniture Manufacturing
- ⚡ Electrical & Technical

### 📊 Technical Features
- **Form Validation**: React Hook Form + Zod schemas
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Radix UI primitives
- **Styling**: Tailwind CSS v4 with custom animations
- **Analytics**: Vercel Analytics integration
- **SEO Optimized**: Metadata and viewport configuration

---

## 🚀 Tech Stack

### Core Framework
- **[Next.js 16.0.10](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - Latest React with server components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### UI & Styling
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)** - Animation utilities

### Form & Validation
- **[React Hook Form 7.60.0](https://react-hook-form.com/)** - Performant forms
- **[Zod 3.25.76](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[date-fns](https://date-fns.org/)** - Date utilities
- **[recharts](https://recharts.org/)** - Charts & data visualization
- **[sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[cmdk](https://cmdk.paco.me/)** - Command menu
- **[embla-carousel](https://www.embla-carousel.com/)** - Carousel component
- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Swadhin-n/Shri_Interworks.git
   cd Shri_Interworks
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
Shri_Interworks/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── contact-form.tsx     # Contact form component
│   ├── footer.tsx           # Footer component
│   ├── glass-card.tsx       # Glassmorphism card
│   ├── header.tsx           # Navigation header
│   └── theme-provider.tsx   # Theme context
├── lib/                     # Utility functions
│   ├── language-provider.tsx # Language context
│   ├── translations.ts      # Translation strings
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
├── styles/                  # Additional styles
├── .github/                 # GitHub workflows
├── components.json          # shadcn/ui config
├── next.config.mjs          # Next.js config
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS config
├── tailwind.config.ts       # Tailwind config
└── tsconfig.json            # TypeScript config
```

---

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Script Details

- **`dev`**: Starts Next.js development server on [localhost:3000](http://localhost:3000)
- **`build`**: Creates optimized production build in `.next/` folder
- **`start`**: Runs the production server (requires `build` first)

---

## 💻 Development

### Adding a New Language

1. Open [`lib/translations.ts`](lib/translations.ts)
2. Add language code to `Language` type
3. Add translation object to `translations` record

```typescript
export type Language = "en" | "ro" | "es" | "de" | "fr" | "it" // Add "it"

export const translations: Record<Language, Record<string, string>> = {
  // ... existing translations
  it: {
    "hero.title": "Soluzioni Europee per la Forza Lavoro",
    // ... more translations
  }
}
```

### Creating New Components

Place reusable components in the `components/` directory:

```tsx
// components/my-component.tsx
export function MyComponent() {
  return <div>My Component</div>
}
```

### Styling Guidelines

- Use Tailwind utility classes for styling
- Follow mobile-first responsive design
- Use `cn()` utility for conditional classes
- Leverage Radix UI for accessible components

### Code Quality

- TypeScript strict mode enabled
- Follow component naming conventions
- Use descriptive variable names

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. **Push to GitHub** (if not already done)
2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js and configures build settings

3. **Deploy**
   - Click "Deploy"
   - Your app will be live in minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Swadhin-n/Shri_Interworks)

### Other Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean**: App Platform or Droplet
- **Self-hosted**: Use Docker or PM2

### Build Configuration

The project is configured with:
- TypeScript build errors ignored (for v0 compatibility)
- Image optimization disabled for static export
- Production-ready PostCSS and Tailwind setup

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Write clear, descriptive commit messages
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

### Reporting Bugs

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information

---

## 👥 Team

This project was collaboratively developed by a dedicated team of three developers:

- **Developer 1** - Lead Developer & Architecture
- **Developer 2** - Frontend & UI/UX
- **Developer 3** - Backend & Integration

*Special thanks to everyone who contributed to making this project a success!*

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Lucide](https://lucide.dev/) - Icon library
- [v0.dev](https://v0.dev/) - Development assistance
- Open source community for inspiration

---

## 📞 Contact & Support

- **Website**: [Visit SHRI INTERWORKS](#)
- **GitHub**: [@Swadhin-n](https://github.com/Swadhin-n)
- **Issues**: [Report a problem](https://github.com/Swadhin-n/Shri_Interworks/issues)

---

## 🔮 Future Roadmap

- [ ] Add user authentication system
- [ ] Implement job posting dashboard
- [ ] Create candidate profile management
- [ ] Add document upload functionality
- [ ] Integrate payment processing
- [ ] Implement real-time chat support
- [ ] Add admin panel
- [ ] Create mobile app (React Native)
- [ ] Implement AI-powered job matching
- [ ] Add video interview integration

---

<div align="center">

**Built with ❤️ by the Swadhin Upadhyay team**

*Bridging continents, building careers*

⭐ Star this repo if you find it helpful!

</div>