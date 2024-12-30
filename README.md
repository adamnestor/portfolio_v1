# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean split-layout design with smooth scrolling navigation and interactive section highlighting.

## Features

- **Responsive Split Layout**: Clean, modern design with fixed left panel and scrollable right content
- **Interactive Navigation**: Smooth scrolling with automatic section highlighting using scroll spy
- **Section Organization**:
  - About: Personal introduction and skills
  - Projects: Showcase of development work
  - Experience: Professional background
  - Education: Academic background and qualifications
- **TypeScript Integration**: Full type safety throughout the application

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Vite (Build tool)

## Project Structure

```
├── components/
│   ├── identity/          # Components for personal information
│   ├── layout/            # Layout components including split view
│   ├── sections/          # Main content section components
│   │   ├── education/     # Education section components
│   │   ├── experience/    # Experience section components
│   │   └── projects/      # Project section components
│   └── shared/            # Reusable components
├── data/                  # Data files for projects, experience, etc.
├── hooks/                 # Custom React hooks including scroll spy
├── styles/               # Global styles and Tailwind configuration
└── types/                # TypeScript type definitions
```

## Usage

The site is organized in a split-panel layout:
- Left panel: Fixed navigation and profile information
- Right panel: Scrollable content sections

Navigation automatically highlights the current section as you scroll through the content, providing a smooth and intuitive user experience.

## Development

This project uses:
- Vite for fast development and optimized builds
- TypeScript for type safety
- Tailwind CSS for styling
- Custom hooks for scroll behavior

To modify content, update the corresponding files in the `data/` directory.
