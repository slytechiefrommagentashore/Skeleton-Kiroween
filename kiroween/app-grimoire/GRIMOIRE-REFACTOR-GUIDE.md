# 🔮 Grimoire Refactoring Guide

This guide outlines the changes needed to complete the transformation from `app-notes` to `app-grimoire`.

## ✅ Completed Changes

1. **Prisma Schema** - Updated to use `Spell` model with fields:
   - `name`, `incantation`, `ingredients`, `powerLevel`
   
2. **README.md** - Updated with spooky grimoire theme

3. **Architecture Documentation** - Created `.kiro/specs/skeleton-architecture.md`

4. **Steering Rules** - Updated with spooky terminology guidelines

5. **Pre-Generate Hook** - Enhanced with random ASCII art

## 🎃 Remaining Refactoring Tasks

### Backend Changes

#### 1. Rename Module Directory
```bash
mv backend/src/modules/notes backend/src/modules/spells
```

#### 2. Update Files in `modules/spells/`

**schema.ts**:
- Rename `Note` → `Spell`
- Update fields: `title` → `name`, `content` → `incantation`
- Add: `ingredients`, `powerLevel` validation

**service.ts**:
- Rename `NoteService` → `SpellService`
- Update all `prisma.note` → `prisma.spell`
- Update method names: `getAllNotes` → `getAllSpells`, etc.
- Update error messages: "Note not found" → "Spell not found"

**controller.ts**:
- Rename `NoteController` → `SpellController`
- Update service calls to `spellService`
- Update schema imports

**router.ts**:
- Update route path: `/notes` → `/spells`
- Update controller imports

#### 3. Update `app.ts`
- Update import: `notesRouter` → `spellsRouter`
- Update route: `app.use('/api/notes', ...)` → `app.use('/api/spells', ...)`

#### 4. Run Prisma Commands
```bash
cd backend
npx prisma generate
npx prisma db push
```

### Frontend Changes

#### 1. Rename Components
- `NoteCard.tsx` → `SpellCard.tsx`
- `NoteEditor.tsx` → `SpellForm.tsx`

#### 2. Rename Pages
- `NotesListPage.tsx` → `SpellsListPage.tsx`
- `CreateNotePage.tsx` → `CreateSpellPage.tsx`
- `EditNotePage.tsx` → `EditSpellPage.tsx`

#### 3. Update Component Content

**SpellCard.tsx**:
- Display: name, incantation, ingredients, powerLevel
- Update prop types

**SpellForm.tsx**:
- Form fields: name, incantation, ingredients, powerLevel
- Update validation

**Pages**:
- Update API calls: `/api/notes` → `/api/spells`
- Update state variable names
- Update UI text

#### 4. Update `App.tsx`
- Update route paths: `/notes` → `/spells`
- Update component imports
- Update navigation links

#### 5. Update `lib/api.ts`
- Rename functions: `getNotes` → `getSpells`, etc.
- Update endpoints

### Shared Types

**shared/types.ts**:
```typescript
export interface Spell {
  id: string;
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
  createdAt: string;
  updatedAt: string;
}
```

## 🧙 Spooky Comment Examples

Update comments throughout the codebase:

```typescript
// ❌ OLD: Fetch all notes from database
// ✅ NEW: Summon all spells from the depths

// ❌ OLD: Validate note input
// ✅ NEW: Perform mystical verification on spell data

// ❌ OLD: Handle errors
// ✅ NEW: Contain curses and dark magic

// ❌ OLD: Initialize service
// ✅ NEW: Awaken the spell service spirits
```

## 📦 Package.json Updates

Update `name` field in both backend and frontend:
- `"name": "app-notes-backend"` → `"name": "app-grimoire-backend"`
- `"name": "app-notes-frontend"` → `"name": "app-grimoire-frontend"`

## 🎯 Testing Checklist

After refactoring:
- [ ] Backend starts without errors
- [ ] Prisma client generated successfully
- [ ] Database migrations applied
- [ ] Frontend builds without errors
- [ ] Can create new spells
- [ ] Can view spell list
- [ ] Can edit existing spells
- [ ] Can delete spells
- [ ] All API endpoints return correct data
- [ ] Spooky comments are in place 👻

## 🚀 Quick Start After Refactoring

```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

---

*May your spells be powerful and your code bug-free!* 🔮✨
