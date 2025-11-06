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

