# 🎃 Kiroween - Universal Fullstack Skeleton

> **Kiroween Hackathon 2025 - Skeleton Crew Category**

A production-ready universal skeleton that accelerates fullstack development with consistent, type-safe patterns. Build any CRUD application in minutes, not days.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)](https://www.typescriptlang.org/)
[![Built with Kiro](https://img.shields.io/badge/Built%20with-Kiro-purple)](https://kiro.ai)

---

## 🎯 The Problem

Building fullstack applications is repetitive. Developers spend countless hours:
- Setting up the same architecture patterns
- Writing boilerplate code
- Ensuring consistency across projects
- Maintaining type safety end-to-end

## 💡 The Solution

**Kiroween** is a universal skeleton that provides:
- ✅ **Battle-tested architecture** proven across multiple domains
- ✅ **100% consistency** - identical patterns, predictable structure
- ✅ **Type-safe** - TypeScript + Zod from database to UI
- ✅ **Production-ready** - error handling, validation, clean code
- ✅ **Rapid development** - build new apps in minutes

---

## 🌟 What Makes This Special

### 1. **Proven Versatility**
Two completely different applications built from the same skeleton:
- **Task Manager** - Clean, minimal productivity app
- **Spellbook** - Immersive dark-themed grimoire

### 2. **Complete Kiro Integration**
- 📋 **Spec-driven development** - Structured requirements, design, and tasks
- 💬 **Vibe coding** - Rapid prototyping and refactoring
- 🪝 **Agent hooks** - Automated workflows with personality
- 📚 **Steering docs** - Consistent theming and terminology

### 3. **Production Quality**
- End-to-end type safety
- Comprehensive error handling
- Runtime validation with Zod
- Clean architecture patterns
- 1000+ lines of documentation

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/kiroween
cd kiroween

# Run app-tasks (Task Manager)
cd app-tasks/backend
npm install && npx prisma generate && npx prisma db push && npm run dev

# In new terminal - Frontend
cd app-tasks/frontend
npm install && npm run dev

# Visit http://localhost:5173
```

### Or Try app-grimoire (Spellbook) 🔮

```bash
cd app-grimoire
QUICK-START.bat  # Windows quick setup
# Visit http://localhost:5173 for spooky experience!
```

---

## 📦 What's Included

### 🎯 skeleton-core
Universal template with:
- Backend structure (Express + Prisma)
- Frontend structure (React + Vite)
- Common utilities (error handling, responses)
- Module pattern templates

### ✅ app-tasks (Task Manager)
**Domain**: Productivity and task tracking

**Features**:
- Create, read, update, delete tasks
- Status management (pending, in-progress, completed)
- Clean, minimal UI
- Full CRUD operations

**Tech**: Express + Prisma + React + Tailwind

### 🔮 app-grimoire (Spellbook)
**Domain**: Magical spell management

**Features**:
- Manage spells (name, incantation, ingredients, power level)
- Dark themed UI with purple/indigo gradient
- Power level visualization with stars ⭐
- Spooky terminology throughout

**Tech**: Express + Prisma + React + Tailwind (dark theme)

---

## 🏗️ Architecture

### Backend Pattern

```
modules/{resource}/
├── schema.ts        # Zod validation schemas
├── service.ts       # Business logic + Prisma
├── controller.ts    # HTTP handlers
└── router.ts        # Express routes
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

### Key Principles

1. **Separation of Concerns**: Controller → Service → Data
2. **Type Safety**: TypeScript + Zod validation
3. **Consistency**: Identical patterns across apps
4. **Simplicity**: Minimal boilerplate

---

## 🎨 Spooky Theme Integration

The grimoire app demonstrates theming capabilities:

**Terminology**:
- Error handling → Curse containment
- Validation → Mystical verification
- Database query → Summoning from the depths
- Create → Inscribe
- Update → Transform
- Delete → Banish

**Visual Theme**:
- Dark gradient background (purple → indigo → black)
- Mystical emojis (🔮, ✨, 💀, ⭐, 👻)
- Glowing purple buttons
- Power level sliders

**Pre-Generate Hook**:
```javascript
// 6 random ASCII art variations
context.log("👻 AWAKENING THE SPIRITS... 👻");
context.log(randomArt);  // Ghost, pumpkin, bat, skull, witch, spider
```

---

## 🔧 Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: Prisma ORM + SQLite
- **Validation**: Zod
- **Language**: TypeScript

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Language**: TypeScript

---

## 📚 Documentation

### Main Documents
- **[README.md](README.md)** - This file
- **[SKELETON-CREW-SUBMISSION.md](SKELETON-CREW-SUBMISSION.md)** - Detailed submission
- **[KIRO-USAGE-WRITEUP.md](KIRO-USAGE-WRITEUP.md)** - How Kiro was used
- **[.kiro/specs/skeleton-architecture.md](.kiro/specs/skeleton-architecture.md)** - Architecture blueprint (400+ lines)

### Kiro Integration
- **[.kiro/specs/app-tasks/](.kiro/specs/app-tasks/)** - Complete spec example
- **[.kiro/steering/style.md](.kiro/steering/style.md)** - Coding guidelines
- **[.kiro/hooks/pre-generate.js](.kiro/hooks/pre-generate.js)** - Pre-generate hook

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

Following the pattern:
- `schema.ts`: Zod validation
- `service.ts`: Business logic
- `controller.ts`: HTTP handlers
- `router.ts`: Express routes

### 4. Build Frontend

- Create Card component
- Create Form component
- Create List/Create/Edit pages
- Add routes to App.tsx

### 5. Run It

```bash
npx prisma generate
npx prisma db push
npm run dev
```

---

## 🎃 Kiro Integration Highlights

### Spec-Driven Development
- Complete requirements with user stories
- Technical design with architecture decisions
- Implementation tasks with clear objectives
- Traced every feature to requirements

### Vibe Coding
- Rapid prototyping and exploration
- Refactored entire app in one session (15+ files)
- Generated comprehensive documentation
- Maintained architectural consistency

### Agent Hooks
- Pre-generate hook with 6 ASCII art variations
- Automated environment setup
- Added personality to development
- Visual feedback for generation

### Steering Docs
- Enforced spooky terminology throughout
- Maintained architectural consistency
- Created cohesive themed codebase
- Standardized code style

---

## 📊 Project Metrics

- **Applications**: 2 fully functional (tasks + grimoire)
- **Documentation**: 1000+ lines
- **Code Files**: 50+ generated/refactored
- **Pattern Consistency**: 100%
- **Type Safety**: End-to-end
- **Kiro Features Used**: All (specs, vibe, hooks, steering)

---

## 🏆 Why This Wins

### Potential Value
- **Widely Useful**: Works for any CRUD application
- **Easy to Use**: Clear documentation and examples
- **Accessible**: Open source, well-documented
- **Proven**: 2 different domains demonstrate versatility

### Implementation
- **Complete Kiro Integration**: Used ALL features effectively
- **Spec-driven + Vibe coding**: Best of both approaches
- **Agent hooks**: Automated workflows
- **Steering**: Enforced consistency

### Quality and Design
- **Creative Theme**: Spooky Halloween integration
- **Professional Code**: Production-ready quality
- **Comprehensive Docs**: 1000+ lines
- **Type-safe**: TypeScript + Zod throughout

---

## 🎬 Demo

### app-tasks (Task Manager)
1. Create new tasks
2. Update task status (pending → in-progress → completed)
3. Edit task details
4. Delete completed tasks

### app-grimoire (Spellbook) 🔮
1. Inscribe new spells with power levels
2. View grimoire with star ratings
3. Transform existing spells
4. Banish spells from existence
5. Experience immersive dark theme

---

## 🤝 Contributing

This is a hackathon submission, but feel free to:
- Fork and adapt for your projects
- Use the skeleton as a starting point
- Learn from the architectural patterns
- Add your own creative twist!

---

## 📄 License

MIT License - Free to use for your own projects!

---

## 🎃 Acknowledgments

Built for **Kiroween Hackathon 2025** with:
- ❤️ Love for clean architecture
- 👻 Spooky Halloween spirit
- 🔮 Mystical coding practices
- ✨ Kiro AI-powered development

---

## 📞 Contact

- **GitHub**: [YOUR-USERNAME](https://github.com/slytechiefrommagentashore)
- **Hackathon**: [Kiroween 2025](https://kiroween.devpost.com/)

---

**May your code be bug-free and your spells be powerful!** 🔮✨

---

*Built with [Kiro](https://kiro.ai) - The AI-powered IDE that makes development magical*
