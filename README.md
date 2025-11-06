# WhatsApp Group Landing Page

A clean, minimal Arabic landing page designed to convert visitors into WhatsApp group members.

## Features

- 🌐 Arabic language support with RTL layout
- 📱 Responsive design for mobile and desktop
- 🎨 WhatsApp-inspired green and white color scheme
- ✨ Smooth animations with Framer Motion
- 📋 Copy-to-clipboard functionality for group code

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Configuration

1. Update the WhatsApp group invite link in `app/page.tsx`:
   ```tsx
   const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE'
   ```

2. Update the group code if needed:
   ```tsx
   const GROUP_CODE = 'YOUR_GROUP_CODE'
   ```

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## Customization

The landing page uses WhatsApp's brand colors:
- Green: `#25D366`
- Dark Green: `#128C7E`

Fonts used:
- Cairo (Arabic font)
- Tajawal (Arabic font)

You can customize colors and fonts in `tailwind.config.js`.

## Deployment on Netlify

This project is configured for easy deployment on Netlify.

### Automatic Deployment (Recommended)

1. Push your code to GitHub (already done)
2. Go to [Netlify](https://www.netlify.com/) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the `aminoz12/landing` repository
5. Netlify will automatically detect Next.js and use the settings from `netlify.toml`
6. Click "Deploy site"

The build settings are pre-configured:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18

### Manual Deployment

If you prefer to deploy manually using Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --build
netlify deploy --prod
```

### Environment Variables

If you need to set environment variables:
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add any required variables

The site will be automatically deployed on every push to the main branch.

