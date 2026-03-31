# Portfolio Frontend - Bhanuka Gihan

This is the frontend for Bhanuka Gihan's professional portfolio, built with **Next.js 16** and **React 19**. It features a high-end, interactive UI with advanced animations and WebGL-based backgrounds.

## ✨ Key Features

- **High-Performance Backgrounds**: Custom-built `Galaxy`, `Beams`, and `LightPillar` visual effects using Three.js and OGL.
- **Interactive Cursor Ecosystem**: `SplashCursor` for fluid-like interactions and `TargetCursor` for precise navigation.
- **Smooth Navigation**: Integrated with **Lenis** for smooth kinetic scrolling.
- **Dynamic Content**: Portfolio data (Experiences, Skills, Projects) is managed via typed constants for easy maintenance.
- **Responsive Resume**: Built-in resume viewer with PDF download functionality (powered by `react-pdf`).
- **Modern Animations**: Extensive use of **Framer Motion** and **GSAP** for micro-interactions and scroll-based triggers.

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI & Logic**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12, GSAP, AOS
- **3D/WebGL**: Three.js, @react-three/fiber, OGL
- **Icons**: Lucide React, React Icons
- **Forms**: EmailJS for contact functionality

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

## 📂 Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components and page sections.
- `src/constants`: Typed data for the portfolio (skills, experience, etc.).
- `src/context`: React Context providers (Global loading state, etc.).
- `src/styles`: Global CSS and Tailwind configurations.
- `public`: Static assets (Images, Resume PDF).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
