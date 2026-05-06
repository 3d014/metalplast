# Metalplast - Next.js Corporate Website

A modern, responsive corporate website for Metalplast - a leading plastic manufacturing company.

## Features

- **Responsive Design**: Built with Tailwind CSS for a mobile-first approach
- **Multiple Pages**: Home, About, Products, Services, and Contact pages
- **Modern UI**: Clean and professional interface with smooth transitions
- **TypeScript**: Fully typed with TypeScript for better code quality
- **Next.js App Router**: Latest Next.js features with App Router
- **SEO Optimized**: Structured for better search engine visibility

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Project Structure

```
metalplast/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   └── components/
│       ├── Header.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Pages

- **Home** (`/`) - Welcome page with company overview and key features
- **About** (`/about`) - Company mission, vision, and history
- **Products** (`/products`) - Showcase of available products
- **Services** (`/services`) - List of manufacturing services offered
- **Contact** (`/contact`) - Contact form and business information

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts` and component files. Current theme uses blue as primary color.

### Content

Update the content in individual page files in `src/app/[page]/page.tsx`.

### Components

Modify `Header.tsx` and `Footer.tsx` in `src/components/` to customize navigation and footer sections.

## Deployment

### Deploy on Vercel

The easiest way to deploy is on [Vercel](https://vercel.com/):

1. Push your code to a git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## Performance

- Optimized images using Next.js Image component
- Code splitting for faster page loads
- CSS minification with Tailwind CSS production build
- Built-in performance monitoring

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Metalplast and all rights are reserved.

## Contact

For more information about Metalplast, visit the contact page or email info@metalplast.com.

---

Made with ❤️ for Metalplast
