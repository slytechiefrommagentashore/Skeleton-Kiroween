# 🎃 Kiroween - Universal Fullstack Skeleton Architecture

> **Skeleton Crew Hackathon 2024 Submission**

A production-ready, universal fullstack skeleton that demonstrates consistent architectural patterns across multiple applications. Built with TypeScript, Express, Prisma, and React.

---

## 🌟 Overview

This repository showcases a **Universal Fullstack Core** architecture that enables rapid generation of consistent, type-safe applications. The skeleton provides battle-tested patterns proven across two fully functional applications with completely different domains.

**Key Features**:
- 🏗️ **Consistent Architecture**: Identical patterns across all applications
- 🔒 **Type Safety**: End-to-end TypeScript with Zod runtime validation
- 🎨 **Flexible Theming**: From minimal task managers to immersive spellbooks
- 📚 **Comprehensive Docs**: 400+ lines of architecture documentation
- 🎃 **Spooky Twist**: Mystical terminology and ASCII art for personality

---

## 📁 Project Structure

```
kiroween/
├── .kiro/                          # Kiro configuration and documentation
│   ├── specs/
│   │   ├── skeleton-architecture.md      # 🎯 Main architecture blueprint (400+ lines)
│   │   ├── architecture-diagram.md       # Visual diagrams with ASCII art
│   │   ├── spooky-terminology-reference.md  # Complete terminology guide
│   │   └── app-tasks/                    # Complete spec example
│   │       ├── requirements.md
│   │       ├── design.md
│   │       └── tasks.md
│   ├── steering/
│   │   └── style.md                      # Coding guidelines with spooky terminology
│   └── hooks/
│       └── pre-generate.js               # Pre-generation hook with 6 ASCII art variations
│
├── skeleton-core/                  # 🎯 Universal template
│   ├── backend/
│   │   ├── src/
│   │   │   ├── common/                   # Shared utilities (error, response)
│   │   │   ├── config/                   # Configuration
│   │   │   └── modules/                  # Module template structure
│   │   └── prisma/
│   └── frontend/
│       └── src/
│           ├── components/               # Reusable components
│           ├── pages/                    # Page templates
│           └── lib/                      # API utilities
│
├── app-tasks/                      # ✅ Task Manager Application
│   ├── backend/
│   │   ├── src/
│   │   │   ├── modules/tasks/           # Task CRUD module
│   │   │   │   ├── schema.ts            # Zod validation
│   │   │   │   ├── service.ts           # Business logic
│   │   │   │   ├── controller.ts        # HTTP handlers
│   │   │   │   └── router.ts            # Express routes
│   │   │   ├── common/                  # Error handling, responses
│   │   │   └── app.ts                   # Express app setup
│   │   └── prisma/
│   │       └── schema.prisma            # Task model
│   ├── frontend/
│   │   └── src/
│   │       ├── components/              # TaskCard, TaskForm, Button
│   │       ├── pages/                   # List, Create, Edit pages
│   │       └── lib/                     # API client
│   └── README.md
│
├── app-grimoire/                   # 🔮 Spellbook Application (FULLY IMPLEMENTED)
│   ├── backend/
│   │   ├── src/
│   │   │   ├── modules/spells/          # Spell CRUD module
│   │   │   │   ├── schema.ts            # Zod validation (name, incantation, ingredients, powerLevel)
│   │   │   │   ├── service.ts           # Business logic with spooky comments
│   │   │   │   ├── controller.ts        # HTTP handlers
│   │   │   │   └── router.ts            # Express routes (/api/spells)
│   │   │   ├── common/                  # Curse containment (error handling)
│   │   │   └── app.ts                   # Express app setup
│   │   └── prisma/
│   │       └── schema.prisma            # Spell model
│   ├── frontend/
│   │   └── src/
│   │       ├── components/              # SpellCard, SpellForm (dark theme)
│   │       ├── pages/                   # SpellsList, Create, Edit pages
│   │       └── lib/                     # API client
│   ├── shared/
│   │   └── types.ts                     # Spell interface
│   ├── REFACTOR-COMPLETE.md             # Refactoring summary
│   ├── QUICK-START.bat                  # Windows setup script
│   └── README.md
│
├── SKELETON-CREW-SUBMISSION.md     # 📄 Main submission document
├── SUBMISSION-CHECKLIST.md         # ✅ Testing and demo checklist
├── .gitignore                      # Git ignore rules
└── README.md                       # 👈 You are here!
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Option 1: Run app-tasks (Task Manager)

```bash
# Backend
cd app-tasks/backend
npm install
npx prisma generate
npx prisma db push
npm run dev

# Frontend (new terminal)
cd app-tasks/frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

### Option 2: Run app-grimoire (Spellbook) 🔮

```bash
# Quick start (Windows)
cd app-grimoire
QUICK-START.bat

# OR manually:
cd app-grimoire/backend
npm install
npx prisma generate
npx prisma db push
npm run dev

# Frontend (new terminal)
cd app-grimoire/frontend
npm install
npm run dev
```

Visit: `http://localhost:5173` for the spooky grimoire experience!

---

## 🏗️ Architecture

### Core Principles

1. **Separation of Concerns**: Controller → Service → Data layers
2. **Type Safety**: TypeScript + Zod validation throughout
3. **Consistency**: Identical patterns across all applications
4. **Simplicity**: Minimal boilerplate, maximum clarity

### Backend Pattern

```
modules/{resource}/
├── schema.ts        # Zod validation schemas
├── service.ts       # Business logic + Prisma operations
├── controller.ts    # HTTP request/response handlers
└── router.ts        # Express route definitions
```

**Example Service**:
```typescript
export class ResourceService {
  async getAll() { /* Prisma query */ }
  async getById(id: string) { /* With existence check */ }
  async create(data: Input) { /* Validated creation */ }
  async update(id: string, data: Input) { /* With check */ }
  async delete(id: string) { /* With check */ }
}
```

### Frontend Pattern

```
src/
├── components/      # Reusable UI components
├── pages/          # Route-based pages
└── lib/            # API client utilities
```

**Example API Client**:
```typescript
export async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Request failed');
  return data.data;
}
```

---

## 🎯 Two Working Applications

### 1. app-tasks ✅ (Task Manager)

**Domain**: Task tracking and management

**Features**:
- Create, read, update, delete tasks
- Status management (pending, in-progress, completed)
- Clean, minimal UI
- Full CRUD operations

**Tech Stack**: Express + Prisma + React + Tailwind

### 2. app-grimoire 🔮 (Spellbook)

**Domain**: Magical spell management

**Features**:
- Create, read, update, delete spells
- Track: name, incantation, ingredients, power level (1-10)
- Dark themed UI with purple/indigo gradient
- Power level visualization with stars ⭐
- Spooky terminology throughout

**Tech Stack**: Express + Prisma + React + Tailwind (dark theme)

**Spooky Comments**:
- "Summon from the depths" (database queries)
- "Inscribe into grimoire" (create)
- "Transform spell" (update)
- "Banish from existence" (delete)
- "Mystical verification" (validation)

---

## 📚 Documentation

### Main Documents

1. **[.kiro/specs/skeleton-architecture.md](.kiro/specs/skeleton-architecture.md)** - Complete architectural blueprint (400+ lines)
2. **[SKELETON-CREW-SUBMISSION.md](SKELETON-CREW-SUBMISSION.md)** - Hackathon submission overview
3. **[SUBMISSION-CHECKLIST.md](SUBMISSION-CHECKLIST.md)** - Testing and demo guide
4. **[.kiro/specs/spooky-terminology-reference.md](.kiro/specs/spooky-terminology-reference.md)** - Spooky terminology guide

### Per-App Documentation

- **app-tasks**: [app-tasks/README.md](app-tasks/README.md)
- **app-grimoire**: [app-grimoire/README.md](app-grimoire/README.md)
- **skeleton-core**: [skeleton-core/README.md](skeleton-core/README.md)

---

## 🎨 Spooky Theme

The grimoire app demonstrates how the skeleton can be themed:

**Terminology**:
- Error handling → Curse containment
- Validation → Mystical verification
- Database query → Summoning from the depths
- API call → Invoking the spirits

**Visual Theme**:
- Dark gradient background (purple → indigo → black)
- Purple and gray color scheme
- Mystical emojis (🔮, ✨, 💀, ⭐, 👻)
- Glowing purple buttons

**Pre-Generate Hook**:
- 6 random ASCII art variations (ghost, pumpkin, bat, skull, witch hat, spider)
- Spooky console messages

---

## 🔧 Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: Prisma ORM with SQLite
- **Validation**: Zod
- **Language**: TypeScript

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Language**: TypeScript

### Development
- **Type Safety**: End-to-end TypeScript
- **Runtime Validation**: Zod schemas
- **Error Handling**: Custom AppError class
- **API Format**: Consistent ApiResponse<T>

---

## 🎯 How to Use This Skeleton

### 1. Copy the Template

```bash
cp -r skeleton-core app-{your-name}
```

### 2. Define Your Domain Model

Edit `prisma/schema.prisma`:
```prisma
model YourResource {
  id        String   @id @default(cuid())
  field1    String
  field2    Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 3. Create Your Module

Following the pattern in `app-tasks` or `app-grimoire`:
- `schema.ts`: Zod validation
- `service.ts`: Business logic
- `controller.ts`: HTTP handlers
- `router.ts`: Express routes

### 4. Build Frontend

- Create Card component for display
- Create Form component for input
- Create List/Create/Edit pages
- Add routes to App.tsx

### 5. Run It

```bash
npx prisma generate
npx prisma db push
npm run dev
```

---

## 🎃 Kiro Integration

### Specs
Complete specification example in `.kiro/specs/app-tasks/`:
- `requirements.md`: User stories and acceptance criteria
- `design.md`: Technical design and architecture
- `tasks.md`: Implementation task list

### Steering Rules
`.kiro/steering/style.md` includes:
- Architectural principles
- Spooky terminology guidelines
- Code style conventions

### Hooks
`.kiro/hooks/pre-generate.js`:
- Displays random ASCII art
- Sets up environment
- Adds personality to generation

---

## 📊 Project Metrics

- **2 Working Applications**: app-tasks, app-grimoire
- **1 Universal Skeleton**: skeleton-core
- **100% Pattern Consistency**: Identical architecture
- **Full Type Safety**: TypeScript + Zod validation
- **400+ Lines**: Architecture documentation
- **15+ Files**: Created for grimoire implementation
- **6 ASCII Art**: Variations in pre-generate hook
- **Spooky Factor**: 👻👻👻👻👻 (5/5 ghosts)

---

## 🧪 Testing

### Run app-tasks
```bash
cd app-tasks/backend && npm run dev
cd app-tasks/frontend && npm run dev
```

### Run app-grimoire
```bash
cd app-grimoire/backend && npm run dev
cd app-grimoire/frontend && npm run dev
```

### Test Pre-Generate Hook
```bash
node .kiro/hooks/pre-generate.js
```

---

## 📦 What's Included

### ✅ Complete Applications
- Task manager with status tracking
- Spellbook with power level management

### ✅ Documentation
- Architecture blueprint (400+ lines)
- Visual diagrams
- Spooky terminology reference
- Per-app setup guides

### ✅ Kiro Integration
- Complete specs (requirements, design, tasks)
- Steering rules with spooky guidelines
- Pre-generate hook with ASCII art

### ✅ Developer Experience
- Quick-start scripts
- Comprehensive READMEs
- Type-safe patterns
- Consistent error handling

---

## 🎬 Demo Highlights

1. **Architecture Documentation** - Comprehensive blueprint
2. **app-tasks** - Clean task manager
3. **app-grimoire** - Immersive spellbook with dark theme
4. **Code Comparison** - Identical patterns, different domains
5. **Pre-Generate Hook** - Random ASCII art
6. **Spooky Terminology** - Mystical comments throughout

---

## 🏆 Why This Skeleton?

1. **Battle-Tested**: Proven across 2 real applications
2. **Well-Documented**: 400+ lines of architecture docs
3. **Kiro-Optimized**: Specs, steering, hooks included
4. **Type-Safe**: End-to-end TypeScript + Zod
5. **Consistent**: 100% identical patterns
6. **Fun**: Spooky theme adds personality 🎃
7. **Production-Ready**: Error handling, validation, clean code

---

## 🤝 Contributing

This is a hackathon submission, but feel free to:
- Fork and adapt for your own projects
- Use the skeleton as a starting point
- Learn from the architectural patterns
- Add your own spooky twist! 👻

---

## 📄 License

MIT License - Feel free to use this skeleton for your own projects!

---

## 🎃 Acknowledgments

Built for the **Skeleton Crew Hackathon 2024** with:
- ❤️ Love for clean architecture
- 👻 Spooky Halloween spirit
- 🔮 Mystical coding practices
- ✨ A touch of magic

---

**May your code be bug-free and your spells be powerful!** 🔮✨

---

*For detailed submission information, see [SKELETON-CREW-SUBMISSION.md](SKELETON-CREW-SUBMISSION.md)*
