# Film Collection

<img width="1189" height="829" alt="Screenshot 2026-05-04 at 10 30 03" src="https://github.com/user-attachments/assets/08b23f36-2b0b-4b0b-96e5-3452f1117ccf" />

## Contents

- [Film Collection](#film-collection)
  - [Contents](#contents)
  - [1. Project Overview](#1-project-overview)
    - [Specification](#specification)
    - [What I Practiced](#what-i-practiced)
  - [2. Tech Stack](#2-tech-stack)
  - [3. Getting Started](#3-getting-started)
    - [Requirements](#requirements)
    - [Local setup](#local-setup)
  - [4. Features](#4-features)
  - [5. Architecture](#5-architecture)
  - [6. Performance and Optimizations](#6-performance-and-optimizations)
  - [7. Accessibility](#7-accessibility)
  - [8. Project Structure](#8-project-structure)
  - [9. Scripts](#9-scripts)
  - [10. Quality Checks](#10-quality-checks)
  - [11. Deployment](#11-deployment)
  - [12. License](#12-license)

## 1. Project Overview

`Film Collection` is a small Angular application that displays a mock movie catalog with
search, favorites, routing, breadcrumbs, and a detailed film page. The project was created as
part of the Angular Intro task and is intentionally built around core Angular concepts:
standalone components, router-based page composition, custom directives and pipes, and Angular
Signals for reactive state management.

The application uses a local mock dataset, renders a catalog of films on the home page, lets the
user filter films by title, toggle favorites, and open a details page for each movie. Shared UI
parts such as header, footer, links, buttons, breadcrumbs, and empty states are extracted into
reusable standalone components.

From an architectural perspective, the project focuses on modern Angular patterns rather than
legacy module-based setup: standalone components, route-level page composition, signal-based state
management in a singleton service, page-driven breadcrumbs, and reusable shared UI building
blocks. The goal was to keep the codebase small, explicit, and easy to reason about while still
reflecting production-like frontend structure.

### Specification

- [Angular Intro: Film Collection](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md)
- Core requirements covered in the project:
  - Angular 20+ with standalone components
  - new control flow: `@if`, `@for`, `@switch`
  - strict TypeScript configuration
  - Angular Signals for application reactivity
  - custom autofocus directive
  - custom duration pipe
  - routing with catalog, details, about, and wildcard page

### What I Practiced

- Build a standalone Angular app without NgModules
- Use Angular Signals for source state and derived state
- Structure feature and shared layers in a small SPA
- Pass data through `input()` and bubble actions through `output()`
- Derive page state from route params on the film details page
- Create a standalone custom directive and a standalone custom pipe
- Simplify UI infrastructure where a page-driven approach is more appropriate

[back to contents](#contents)

## 2. Tech Stack

![Angular Badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vitest Badge](https://img.shields.io/badge/Vitest-%236E9F18?style=for-the-badge&logo=Vitest&logoColor=%23fcd703)

- Angular 21
- TypeScript 5 with `strict` mode
- Angular Router
- Angular Signals (`signal`, `computed`, `input`, `output`)
- Tailwind CSS 4
- ESLint + angular-eslint
- Prettier
- Vitest via Angular test runner
- JSDOM test environment
- Husky

[back to contents](#contents)

## 3. Getting Started

### Requirements

- Node.js `>= 22.17.1`
- npm `>= 10.9.2`

### Local setup

1. Install dependencies:

```bash
npm ci
```

2. Start the development server:

```bash
npm start
```

3. Open the application in the browser:

```text
http://localhost:4200
```

[back to contents](#contents)

## 4. Features

1. Film catalog page with cards rendered from local mock JSON data
2. Search by title with instant filtering
3. Custom autofocus directive applied to the search field
4. Favorite toggle stored in a global signal-based service
5. Film details page with route parameter binding
6. Custom duration pipe for formatting runtime values
7. Responsive catalog and details layout for mobile, tablet, and desktop screens
8. Adaptive header navigation with burger menu on smaller viewports
9. Shared layout with header and footer on every page
10. Breadcrumb navigation for catalog, details, and about pages
11. About page and wildcard not-found route
12. Reusable standalone UI components for links, buttons, icons, inputs, empty states, and cards

[back to contents](#contents)

## 5. Architecture

- Standalone Angular application without NgModules
- Route-level page components in `features/`
- Shared reusable UI components, directives, and pipes in `shared/`
- Domain models and route constants in `core/`
- Mock data stored in `src/assets/mock/films.json`
- Global `FilmsService` acts as the source of truth for the film collection
- Application state is modeled with Angular Signals:
  - full film collection in a `signal`
  - favorite films exposed via `computed`
  - title search stored in a component `signal`
  - current film on the details page derived from route input
- Component interaction follows `input()` / `output()` patterns
- Breadcrumbs are configured on the page level instead of through router event plumbing
- Shared presentation primitives (`app-link`, `app-button`, `app-input`, `app-empty`, etc.) help
  keep feature templates smaller and more consistent

[back to contents](#contents)

## 6. Performance and Optimizations

- Route-level lazy loading via `loadComponent()` in `app.routes.ts`
- `NgOptimizedImage` is used on film cards and the details page for optimized image rendering
- `ChangeDetectionStrategy.OnPush` is applied across the application to reduce unnecessary change
  detection work
- Small, focused standalone components help keep rendering predictable and templates easier to
  reason about

[back to contents](#contents)

## 7. Accessibility

- Semantic page structure with header, main content, footer, and breadcrumbs
- Keyboard-accessible navigation and interactive controls
- Visible focus styles for links and buttons
- `aria-label` usage on icon-only controls
- Poster images include `alt` text
- The current breadcrumb item is visually distinguished and exposed as the current page state

[back to contents](#contents)

## 8. Project Structure

```text
src/
  app/
    core/
      constants/        # route constants
      models/           # domain models
    features/
      about/            # about page
      film-catalogue/   # home page, list, and film card components
      film-details/     # details page
      not-found/        # wildcard route page
      state/
        films/          # signal-based film store service
    shared/
      components/       # reusable UI components
      directives/       # custom directives
      models/           # shared UI types
      pipes/            # custom pipes
    app.config.ts
    app.routes.ts
  assets/
    icons/
    mock/
      films.json
  index.html
  main.ts
  styles.css
```

[back to contents](#contents)

## 9. Scripts

- `npm start` — run Angular dev server
- `npm run build` — create production build
- `npm run watch` — development build in watch mode
- `npm run test` — run unit tests
- `npm run tsc` — run TypeScript type check
- `npm run lint` — run ESLint through Angular CLI
- `npm run prettier` — format project files

[back to contents](#contents)

## 10. Quality Checks

Useful commands before submission:

```bash
npm run tsc
npm run lint
npm run test
```

The project is configured with strict TypeScript checks, ESLint, Prettier, and unit tests to help
keep the codebase consistent and maintainable.

Unit tests in this project are executed with `Vitest` through the Angular test runner.

[back to contents](#contents)

## 11. Deployment

Deployment target: GitHub Pages at `https://elrouss.github.io/film-collection`
(see `homepage` in `package.json`).

[back to contents](#contents)

## 12. License

MIT © 2026 Boris Zashliapin

[back to contents](#contents)
