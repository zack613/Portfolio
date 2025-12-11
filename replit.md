# Tahir Aasim Portfolio

## Overview
A modern, interactive portfolio website for Tahir Aasim, a Data Science graduate from Christ Deemed to be University, Pune. The site showcases skills, projects, certifications, education, and contact information with a tech-forward, developer-focused aesthetic.

## Current State
**Status**: Complete and functional MVP

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Backend**: Express.js (minimal, serves static assets)

## Project Structure
```
client/src/
├── components/
│   ├── Navigation.tsx          # Fixed header with smooth scroll navigation
│   ├── Footer.tsx              # Site footer
│   └── sections/
│       ├── HeroSection.tsx     # Animated hero with typewriter effect
│       ├── AboutSection.tsx    # Profile summary and stats
│       ├── SkillsSection.tsx   # Tech stack by category
│       ├── ExperienceSection.tsx # Work history timeline
│       ├── ProjectsSection.tsx # Featured projects with metrics
│       ├── CertificationsSection.tsx # Credentials grid
│       ├── EducationSection.tsx # Academic background
│       └── ContactSection.tsx  # Contact methods
├── pages/
│   └── Portfolio.tsx           # Main portfolio page
└── App.tsx                     # Root component with routing
```

## Key Features
- Dark theme with monospace typography (JetBrains Mono + Inter)
- Typewriter animation for hero title
- Smooth scroll navigation between sections
- Responsive design for all screen sizes
- Interactive cards with hover effects
- Working external links (GitHub, LinkedIn, email, phone)
- Resume download functionality
- Mobile-friendly hamburger menu

## External Links
- **GitHub**: https://github.com/zack613
- **LinkedIn**: https://linkedin.com/in/tahir-aasim-
- **Email**: asimbin8@gmail.com
- **Phone**: +91 9103314582

## Running the Project
The application runs on port 5000 using `npm run dev`.

## Recent Changes
- December 2024: Initial portfolio build with all sections complete
