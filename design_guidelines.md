# Portfolio Design Guidelines for Tahir Aasim - Data Science Graduate

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Linear, Vercel, GitHub) and tech-forward aesthetics. This portfolio emphasizes technical credibility through clean, code-inspired design patterns while maintaining high visual impact.

## Core Design Principles
- **Tech-Forward Aesthetic**: Monospace typography, terminal-like elements, subtle grid patterns
- **Information Architecture**: Clear hierarchy prioritizing projects and technical skills
- **Interactive Excellence**: Smooth animations and hover states that feel responsive and polished
- **Professional Credibility**: Clean, organized layouts that showcase data science expertise

---

## Typography System

**Primary Font**: JetBrains Mono (monospace) via Google Fonts
- Headings: 600-700 weight
- Body: 400-500 weight
- Code/Technical elements: 400 weight

**Secondary Font**: Inter (sans-serif) via Google Fonts  
- Used for longer descriptive text for readability
- Body paragraphs: 400 weight
- Supporting text: 300 weight

**Type Scale**:
- Hero headline: text-5xl to text-7xl
- Section headers: text-3xl to text-4xl  
- Subsection titles: text-xl to text-2xl
- Body text: text-base to text-lg
- Captions/metadata: text-sm

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 8, 12, 16, 24
- Micro spacing (within components): p-2, gap-4, space-y-2
- Standard spacing (between elements): p-8, gap-8, my-12
- Macro spacing (sections): py-16, py-24, gap-16

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

**Grid System**:
- Projects: 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Skills categories: 2-column grid (grid-cols-1 md:grid-cols-2)
- Certifications: 3-column card grid
- Single column stack on mobile throughout

---

## Page Structure & Sections

### 1. Hero Section (100vh)
- Full-screen impactful introduction
- Large headline with typewriter or fade-in animation: "Tahir Aasim" + "Data Science Graduate"
- Subheading with role/tagline
- Animated gradient background or subtle particle effect (canvas-based)
- Primary CTA buttons: "View Projects", "Download Resume"
- Scroll indicator at bottom

### 2. About Section
- Two-column layout (60/40 split)
- Left: Profile summary text from resume with expanded bio
- Right: Quick stats grid (Education, Location, Experience status)
- Social links bar (GitHub, LinkedIn, Email, Phone) with icon buttons

### 3. Skills Showcase  
- Four category cards: Programming, Machine Learning, Data Tools, Frameworks/Cloud
- Each card displays skills as tags/badges
- Hover effects revealing proficiency level or subtle glow
- Icon library: Font Awesome for tech icons via CDN

### 4. Experience Timeline
- Single current internship card with expanded details
- Project title prominently displayed
- Bullet points with achievements
- Date range indicator
- Subtle connecting line visual element

### 5. Projects Gallery (Primary Focus)
- Three featured project cards in grid layout
- Each card includes:
  - Project title (large, bold)
  - Brief description
  - Tech stack badges (small pills)
  - Metrics display (MAE, R2, accuracy where applicable)
  - GitHub link button (working, opens in new tab)
  - Hover state with subtle lift/shadow effect
- Stagger animation on scroll-in

### 6. Certifications Grid
- Five certification cards in 3-column grid wrapping to 2 columns on tablet
- Each card shows:
  - Certification name
  - Issuing organization (MongoDB, Microsoft, Deloitte, British Airways)
  - Certification code
  - GitHub verification link
  - Small badge/icon for organization

### 7. Education Section
- Two university cards (Master's and Bachelor's)
- Display: University name, degree, dates, GPA, relevant coursework
- Icon or logo placeholder for institutions

### 8. Contact Section
- Centered layout with multiple contact methods
- Large icon buttons for GitHub, LinkedIn, Email, Phone
- Each opens appropriate action (mailto:, tel:, external links)
- Optional contact form alternative alongside direct links
- Footer with copyright and "Built with [tech stack]" note

---

## Component Library

### Cards
- Bordered containers with subtle backdrop effect
- Padding: p-6 to p-8
- Rounded corners: rounded-lg to rounded-xl
- Hover: Translate-y lift effect, enhanced border glow

### Buttons
- Primary: Solid fill, rounded-md, px-6 py-3
- Secondary: Outlined with border, same padding
- Icon buttons: Square/circular, p-3, for social links
- Hover states: Scale up slightly (scale-105), enhanced glow

### Badges/Tags
- Small pill shape: rounded-full, px-3 py-1, text-xs
- Used for tech stack, skills display
- Inline-flex layout

### Navigation
- Fixed header with backdrop blur (sticky top-0)
- Logo/name on left, nav links on right
- Smooth scroll to sections on click
- Mobile: Hamburger menu transforming to overlay

### Links
- Underline decoration on hover
- Transition-all for smooth effects
- External links indicated with arrow icon (Heroicons)

---

## Animations & Interactions

**Scroll Animations**: 
- Fade-in with slight upward motion (translate-y) using Intersection Observer
- Stagger effect for grid items (delay increments)

**Hover Effects**:
- Cards: Lift (translate-y-2) + enhanced shadow
- Buttons: Scale (scale-105) + glow
- Links: Underline slide-in effect

**Loading States**:
- Hero typewriter effect for name/title
- Skill tags animate in sequentially
- Project cards stagger on viewport entry

**Keep Minimal**: No excessive parallax, no autoplay carousels, no distracting particle systems beyond hero

---

## Accessibility

- ARIA labels on all icon-only buttons
- Keyboard navigation support for all interactive elements
- Focus states clearly visible with ring offsets
- Semantic HTML structure (header, nav, main, section, footer)
- Alt text placeholders for any future images
- Sufficient contrast ratios maintained through design system

---

## Images

**Hero Background**: 
- Large, tech-themed gradient or abstract data visualization background
- Subtle animated gradient or geometric pattern overlay
- No photograph - keep it abstract/digital aesthetic

**No additional images needed** - this portfolio relies on clean typography, iconography, and structured data presentation rather than photography. Tech aesthetic achieved through design patterns, not imagery.

---

## Technical Specifications

**Icons**: Font Awesome CDN (single library choice)
**Fonts**: Google Fonts (JetBrains Mono + Inter)
**No custom SVGs**: Use library icons exclusively
**Responsive breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

This portfolio prioritizes technical credibility, readability, and smooth interactions over visual decoration, creating a professional showcase for a data science graduate entering the job market.