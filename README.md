# 🪐 Krytil — The Intelligent Digital Hub

Welcome to the official repository for **Krytil Private Limited's** digital gateway. This platform is built to showcase our core capabilities, tell our story, and act as an instant, interactive bridge between our team and the world. 

Designed with a high-fidelity aesthetic, the application combines modern design elements like glassmorphism, responsive grids, and interactive canvas physics with a structured, component-driven React architecture.

---

## 📂 Project Architecture

We have modularized the project into a professional React file structure. The monolithic `App.jsx` entry file has been segregated into clean, maintainable, and self-contained components:

```
src/
├── components/                  # General UI and interactive background components
│   ├── BlueprintGrid.jsx        # Canvas-based engineering grid with floating particles
│   ├── SideDecorations.jsx      # CSS-animated vertical neon scanner lines
│   ├── NeuralMesh.jsx           # Interactive canvas particle mesh reacting to mouse movements
│   ├── Navbar.jsx               # Header navigation with smooth scrolling and responsive mobile toggle
│   ├── ServiceModal.jsx         # Dialog modal rendering details, capabilities, and CTAs for chosen services
│   └── TiltContactCard.jsx      # Contact cards featuring 3D perspective tilt hover animations
│
├── components/sections/         # Main sections of the homepage
│   ├── HeroSection.jsx          # Entry viewport overlaying typography, NeuralMesh, and CTAs
│   ├── ServicesSection.jsx      # Scrollable carousel containing AI/IT service cards
│   ├── AboutSection.jsx         # Company summary and stats counters with intersection-based load animations
│   ├── CareersSection.jsx       # Forms panel matching candidates and project briefing requests
│   ├── ContactSection.jsx       # Direct channels row (updated phone, WhatsApp, and mail)
│   └── Footer.jsx               # Traditional copyright notice and system status badge
│
├── App.css                      # Base layout alignments
├── App.jsx                      # App root orchestrating layout and top-level Modal states
├── index.css                    # Tailwind CSS directives
└── main.jsx                     # Entrypoint rendering App in StrictMode
```

---

## ✨ Features & Interactive Elements

- **Fluid Responsiveness**: Standard CSS rules and Tailwind breakpoints ensure layouts automatically adapt to any screen width. Desktop screens utilize edge-to-edge margins with generous padding, while mobile viewports receive custom vertical scaling for compact reading.
- **Physics-Based Canvas Meshes**:
  - **NeuralMesh**: Tracks mouse coordinates to apply an attraction-force field, pulling nodes towards the cursor inside a `requestAnimationFrame` loop.
  - **BlueprintGrid**: Draws a static grid underneath drifting particles, emphasizing engineering precision.
- **Micro-Animations**: Features custom CSS keyframe animations for scan lines, pulse flows, entry fades, and menu translations.

---

## 📬 Form Dispatch & Communication Flow

To ensure communication is prompt and reliable, the forms in the **Careers & Project** section utilize a zero-friction dual-routing client-side dispatch mechanism:

### 1. Project Inquiry Form
Gathers details like full name, email, organization, phone number, and brief. Upon submit:
- Generates a formatted text summary.
- Triggers a **WhatsApp window** pre-filled with the message targeting **`+91 89045 42699`**.
- Triggers a **Mail client window** pre-filled targeting **`Hr@krytil.com`**.

### 2. Internship Candidacy Form
Gathers full name, email, target role, academic institution, portfolio links, and statement of purpose. Upon submit:
- Compiles the application details into a structured profile report.
- Prepares a **WhatsApp dispatch** targeting **`+91 89045 42699`**.
- Opens a **Mail draft** targeting **`Hr@krytil.com`**.

---

## 🛠️ Technology Stack

The application is built on top of a lightweight, high-performance stack:
- **Core Library**: [React 19](https://react.dev/) (Strict Mode enabled)
- **Tooling/Bundler**: [Vite 8](https://vite.dev/) (Fast Hot Module Replacement)
- **Styling Utility**: [Tailwind CSS 3](https://tailwindcss.com/) (Atomic styling controls)
- **Graphic Assets**: HTML5 2D Canvas Context APIs
- **Icons**: [Lucide React](https://lucide.dev/) (Crisp SVG icon vectors)

---

## 🚀 Local Development

To run the project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/manikandann-18/m-kw.git
   cd m-kw/krytil-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```
   This compiles the project, optimizes assets, and outputs a production-ready bundle to the `dist/` directory.

---

Created with care for Krytil Private Limited © 2026. All rights reserved.
