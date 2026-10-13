# Muhammad Alfisyahrin Muzhaffar — Personal Portfolio

An ultra-modern, high-performance personal portfolio website built with **React**, **Vite**, **Framer Motion**, and a custom **Bento Grid design system**. Featuring seamless SPA navigation, bilingual localization (English / Indonesian), interactive physics cards, and authentic credential showcases.

---

## 🌟 Highlights & Features

- **⚡ Fast & Modern Architecture**: Powered by React 19 and Vite with instant HMR and optimized production bundles.
- **🎨 Curated Aesthetics**: Deep Royal Navy Blue (`#090D45` / `#101694`) paired with high-contrast Lime Green (`#D1FF00`) and refined typography.
- **🌐 Full Bilingual Support (i18n)**: Instant language switching between English and Indonesian with localized content across all sections.
- **✨ Micro-Interactions & Physics**:
  - Interactive glowing 2D canvas background reacting to cursor movement (`CursorGrid`).
  - Realistic 3D tilt & physics lanyard ID Card component (`DecayCard`) powered by GSAP.
  - Smooth page transitions and staggered reveals powered by Framer Motion.
- **📜 Verified Credentials & Certificates**:
  - 100% authentic scanned physical credentials with modal inspection and zoom view.
  - Piagam Juara 1 Medali Emas Piala Pangdam Iskandar Muda 2023.
  - Piagam Juara 1 Kejurkot Taekwondo Lhokseumawe 2024.
  - Piagam Juara 2 Polytechnic Taekwondo Cup 2023.
  - Piagam Juara 3 Medali Perunggu POMDA Aceh 2025.
  - Piagam Peraih Medali Emas Nasional Matematika OSSN 2023 (Garuda Sains Indonesia).
  - Certificate of Completion English for Teens Module 1 (Eka Learning Center).
- **🏆 Athletic Honors & Engineering Mindset**: Bento Grid highlighting martial arts discipline and synergy with software engineering.
- **📱 Fully Responsive**: Fluid typography and flexible grid layouts tailored for mobile, tablet, and ultra-wide screens.

---

## 🛠️ Tech Stack

| Domain | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [Vite](https://vite.dev/) |
| **Animation & Motion** | [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Bootstrap) |
| **Styling** | Modern Vanilla CSS (CSS Variables, Flexbox, Bento CSS Grid, Glassmorphism) |
| **State & Localization** | Custom React State + Lightweight `i18n.js` Dictionary |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfisyahrin-26/Portofolio.git
   cd Portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
Portofolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── sertifikat/      # Scanned certificate images (pangdam, kota, ptc, pomda, gsi, elc)
│   │   └── ...              # Profile, avatar, and logo assets
│   ├── components/
│   │   ├── CursorGrid.jsx   # Interactive canvas background grid
│   │   └── DecayCard.jsx    # Physics-based interactive lanyard card
│   ├── App.jsx              # Main application & routing logic
│   ├── i18n.js              # Bilingual dictionaries (EN & ID)
│   ├── index.css            # Design system, CSS variables, and layout utilities
│   └── main.jsx             # React entrypoint
├── package.json
└── vite.config.js
```

---

## 👤 Author

**Muhammad Alfisyahrin Muzhaffar**
- GitHub: [@alfisyahrin-26](https://github.com/alfisyahrin-26)
- Email: alfisyahrinmuzhaffar@gmail.com

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal and portfolio reference.
