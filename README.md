# 🛠️ ToolMate

A modern, privacy-focused collection of free online tools built with Next.js 14 and TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🔒 Privacy First
- **100% Client-Side Processing** - All tools run entirely in your browser
- **No Data Collection** - Your data never leaves your device
- **No Sign-Up Required** - Use all tools instantly

### ⚡ Lightning Fast
- Static site generation for optimal performance
- Instant results with no server delays
- Optimized for Core Web Vitals

### 🎯 Available Tools

1. **QR Code Generator** - Create QR codes from URLs, text, and more
2. **Password Generator** - Generate strong, secure random passwords
3. **Word Counter** - Count words, characters, sentences, and estimate reading time

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mosuzzzz/toolmate.git

# Navigate to project directory
cd toolmate

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Code**: [qrcode.react](https://www.npmjs.com/package/qrcode.react)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗️ Project Structure

```
ToolMate/
├── app/
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Home page
│   ├── contact/                # Contact page
│   ├── privacy-policy/         # Privacy policy
│   ├── terms-of-use/           # Terms of use
│   ├── tools/
│   │   ├── qr-code/           # QR Code Generator
│   │   ├── password-generator/ # Password Generator
│   │   └── word-counter/       # Word Counter
│   ├── sitemap.ts             # SEO sitemap
│   └── robots.ts              # Robots.txt
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer
│   └── PrivacyBadge.tsx       # Privacy notice badge
└── lib/
    └── utils.ts               # Utility functions
```

## 🎨 Design Philosophy

- **Minimalist UI** - Clean, distraction-free interface
- **Mobile-First** - Responsive design for all devices
- **Accessibility** - WCAG compliant components
- **SEO Optimized** - Proper meta tags and semantic HTML

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```


### Environment Variables

No environment variables required! All tools run client-side.

## 🗺️ Roadmap

- [ ] Color Picker & Converter
- [ ] Image Compressor
- [ ] Unit Converter
- [ ] Name Generator
- [ ] Dark Mode
- [ ] Multilingual Support (TH/EN)
- [ ] PWA Support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Patiphan**
- Email: devpatiphan@gmail.com
- GitHub: [@Mosuzzzz](https://github.com/Mosuzzzz)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting
- [Lucide](https://lucide.dev/) for beautiful icons
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS

## 📊 SEO & Analytics

- ✅ Sitemap generated automatically
- ✅ Robots.txt configured
- ✅ Meta tags optimized for each page
- ✅ Semantic HTML structure
- ✅ Fast page load times (<1.5s)

## 🔐 Privacy & Security

- No user data is stored on servers
- All processing happens client-side
- No cookies (except for analytics if enabled)
- GDPR compliant
- Privacy Policy and Terms of Use included

## 💡 Support

If you find this project helpful, please give it a ⭐️!

For questions or support, please contact: devpatiphan@gmail.com

---

Made with ❤️ by Patiphan
