# Skeleton Core

Universal fullstack boilerplate for Express + Prisma + React + Vite.

## Structure

```
skeleton-core/
├── backend/          # Express + Prisma backend
├── frontend/         # React + Vite frontend
└── shared/           # Shared TypeScript types
```

## Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Backend runs on `http://localhost:3000`

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Features

### Backend
- Express server with centralized error handling
- Prisma ORM with SQLite (easily swappable)
- Environment configuration with dotenv
- Reusable API response helpers
- Module pattern ready (controller, service, router, schema)

### Frontend
- React 18 with TypeScript
- Vite for fast development
- TailwindCSS for styling
- Reusable UI components (Button, Input, Form, Card)
- Global API client
- Error boundary for error handling
- React Router for navigation

### Shared
- Type-safe contracts between backend and frontend
- Consistent API response format
- Pagination interfaces

## Module Pattern

Each feature module should follow this structure:

```
backend/src/modules/[feature]/
├── controller.ts    # Request handling
├── service.ts       # Business logic
├── router.ts        # Route definitions
└── schema.ts        # Zod validation schemas
```

## Usage

This skeleton is designed to be copied and extended for new applications. See `app-tasks` and `app-notes` for examples.
