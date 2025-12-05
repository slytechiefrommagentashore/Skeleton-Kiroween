# 🔮 Grimoire - A Spooky Spellbook App

A mystical CRUD spellbook application built with the Universal Fullstack Skeleton Core. Manage your magical spells with power and precision!

## Features

- Create, read, update, and delete spells
- Track spell incantations, ingredients, and power levels
- Spooky, enchanted UI
- Full-stack TypeScript with mystical validation
- Express + Prisma backend (summoning from the depths)
- React + Vite frontend (conjuring the interface)

## Setup

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Backend runs on `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## API Endpoints (Mystical Invocations)

- `GET /api/spells` - Summon all spells from the grimoire
- `GET /api/spells/:id` - Retrieve a specific spell by ID
- `POST /api/spells` - Inscribe a new spell into the grimoire
- `PUT /api/spells/:id` - Modify an existing spell
- `DELETE /api/spells/:id` - Banish a spell from existence

## Spell Schema

Each spell contains:
- **name**: The spell's mystical name
- **incantation**: The words of power to cast it
- **ingredients**: Required magical components
- **powerLevel**: Spell potency (1-10)

## Tech Stack

### Backend
- Express.js
- Prisma ORM
- SQLite database
- Zod validation
- TypeScript

### Frontend
- React 18
- React Router
- TailwindCSS
- Vite
- TypeScript

## Project Structure

```
app-grimoire/
├── backend/
│   ├── src/
│   │   ├── modules/spells/
│   │   │   ├── controller.ts    # HTTP invocation handlers
│   │   │   ├── service.ts       # Spell business logic
│   │   │   ├── router.ts        # Mystical routes
│   │   │   └── schema.ts        # Enchantment validation
│   │   ├── common/
│   │   │   ├── error.ts         # Curse containment
│   │   │   └── response.ts      # Mystical replies
│   │   ├── config/
│   │   ├── app.ts
│   │   └── server.ts
│   └── prisma/
│       └── schema.prisma        # Spell data model
├── frontend/
│   └── src/
│       ├── components/          # Reusable spell components
│       ├── pages/               # Grimoire pages
│       ├── lib/                 # API conjuring utilities
│       └── App.tsx
└── shared/
    └── types.ts
```

---

*Part of the Skeleton Crew Hackathon 2024 - Universal Fullstack Skeleton* 🎃👻
