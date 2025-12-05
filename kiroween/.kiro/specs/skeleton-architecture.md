# Universal Fullstack Skeleton Architecture 🎃

## Overview

This document describes the **Universal Fullstack Core** architecture that powers both `app-grimoire` (Spellbook) and `app-tasks` (Task Manager). This blueprint demonstrates how Kiro can generate consistent, production-ready applications using a shared architectural foundation.

## Core Philosophy

The skeleton architecture follows these principles:
- **Separation of Concerns**: Clear boundaries between layers (Controller → Service → Data)
- **Type Safety**: End-to-end TypeScript with runtime validation
- **Consistency**: Identical patterns across all applications
- **Simplicity**: Minimal boilerplate, maximum clarity

---

## Backend Architecture

### Technology Stack

- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: Prisma ORM with SQLite
- **Validation**: Zod schemas
- **Error Handling**: Custom AppError class

### Layer Structure

```
backend/
├── src/
│   ├── app.ts                 # Express app setup
│   ├── common/
│   │   ├── error.ts          # Curse containment (error handling)
│   │   └── response.ts       # Standardized API responses
│   ├── config/
│   │   └── env.ts            # Environment configuration
│   └── modules/
│       └── {resource}/
│           ├── controller.ts  # HTTP request handling
│           ├── service.ts     # Business logic
│           ├── schema.ts      # Zod validation schemas
│           └── router.ts      # Route definitions
└── prisma/
    └── schema.prisma          # Database schema
```

### 1. Controller Layer (Thin Controllers)

**Purpose**: Handle HTTP requests/responses, delegate to services

**Pattern**:
```typescript
export class ResourceController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await resourceService.getAllItems();
      res.json(successResponse(items));
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = createSchema.parse(req.body);
      const item = await resourceService.createItem(validated);
      res.status(201).json(successResponse(item));
    } catch (error) {
      next(error);
    }
  }
}
```

**Key Characteristics**:
- No business logic
- Validation at entry point using Zod
- Consistent error handling via `next(error)`
- Standard response format using `successResponse()`

### 2. Service Layer (Business Logic)

**Purpose**: Contain all business logic and data operations

**Pattern**:
```typescript
export class ResourceService {
  async getAllItems() {
    return prisma.resource.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getItemById(id: string) {
    const item = await prisma.resource.findUnique({
      where: { id },
    });

    if (!item) {
      throw new AppError(404, 'Resource not found');
    }

    return item;
  }

  async createItem(data: CreateInput) {
    return prisma.resource.create({ data });
  }
}
```

**Key Characteristics**:
- All Prisma interactions happen here
- Throws `AppError` for operational errors
- Returns data directly (no HTTP concerns)
- Existence checks before updates/deletes

### 3. Schema Layer (Validation)

**Purpose**: Define and validate data structures using Zod

**Pattern**:
```typescript
import { z } from 'zod';

export const createResourceSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  description: z.string().optional(),
});

export const updateResourceSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().optional(),
});

export type CreateResourceInput = z.infer<typeof createResourceSchema>;
export type UpdateResourceInput = z.infer<typeof updateResourceSchema>;
```

**Key Characteristics**:
- Runtime validation with type inference
- Clear error messages
- Separate schemas for create/update operations
- Exported types for use throughout the app

### 4. Common Utilities

#### Error Handling (Curse Containment)

```typescript
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const errorHandler = (err: Error | AppError, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  console.error('Unexpected error:', err);
  return res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
};
```

#### Response Format

```typescript
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export const successResponse = <T>(data: T, meta?): ApiResponse<T> => ({
  success: true,
  data,
  meta,
});
```

---

## Frontend Architecture

### Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **HTTP Client**: Fetch API

### Component Structure

```
frontend/
├── src/
│   ├── App.tsx               # Root component with routing
│   ├── main.tsx              # Entry point
│   ├── components/
│   │   ├── Button.tsx        # Reusable button component
│   │   ├── ErrorBoundary.tsx # Error containment
│   │   └── {Resource}Card.tsx
│   ├── pages/
│   │   ├── {Resource}ListPage.tsx
│   │   ├── Create{Resource}Page.tsx
│   │   └── Edit{Resource}Page.tsx
│   └── lib/
│       └── api.ts            # API client utilities
```

### Key Patterns

#### 1. API Client

```typescript
const API_BASE = 'http://localhost:3000/api';

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Request failed');
  }

  return data.data;
}
```

#### 2. Functional Components with Hooks

```typescript
export function ResourceListPage() {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await apiRequest<Resource[]>('/resources');
      setItems(data);
    } catch (error) {
      console.error('Failed to load:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Component JSX */}
    </div>
  );
}
```

#### 3. Reusable Components

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit';
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button' 
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded font-medium transition';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
```

---

## Database Schema Pattern

### Prisma Schema Structure

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Resource {
  id        String   @id @default(cuid())
  field1    String
  field2    String
  field3    Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Standard Fields**:
- `id`: CUID for unique identification
- `createdAt`: Automatic timestamp on creation
- `updatedAt`: Automatic timestamp on updates

---

## Application Examples

### 1. app-grimoire (Spellbook) 🔮

**Domain**: Magical spell management

**Prisma Model**:
```prisma
model Spell {
  id          String   @id @default(cuid())
  name        String
  incantation String
  ingredients String
  powerLevel  Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

**Module Structure**:
- `SpellController`: HTTP handlers for spell endpoints
- `SpellService`: Spell business logic (CRUD operations)
- `spellSchema`: Zod validation for spell data
- `spellRouter`: Express routes for `/api/spells`

### 2. app-tasks (Task Manager) ✅

**Domain**: Task tracking and management

**Prisma Model**:
```prisma
model Task {
  id        String   @id @default(cuid())
  title     String
  status    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Module Structure**:
- `TaskController`: HTTP handlers for task endpoints
- `TaskService`: Task business logic with status management
- `taskSchema`: Zod validation with enum for status
- `taskRouter`: Express routes for `/api/tasks`

---

## Development Workflow

### 1. Generate New Application from Skeleton

```bash
# Copy skeleton-core
cp -r skeleton-core app-{name}

# Update package.json names
# Update database schema in prisma/schema.prisma
# Generate Prisma client
cd app-{name}/backend
npm install
npx prisma generate
npx prisma db push
```

### 2. Create New Resource Module

1. **Define Prisma Model** in `schema.prisma`
2. **Create Module Directory**: `src/modules/{resource}/`
3. **Create Schema** (`schema.ts`): Zod validation schemas
4. **Create Service** (`service.ts`): Business logic with Prisma
5. **Create Controller** (`controller.ts`): HTTP handlers
6. **Create Router** (`router.ts`): Express routes
7. **Register Router** in `app.ts`

### 3. Frontend Integration

1. **Create API Functions** in `lib/api.ts`
2. **Create Components**: Card, Form, etc.
3. **Create Pages**: List, Create, Edit
4. **Add Routes** in `App.tsx`

---

## Testing Strategy

### Backend Testing
- **Unit Tests**: Service layer logic
- **Integration Tests**: API endpoints
- **Validation Tests**: Zod schema edge cases

### Frontend Testing
- **Component Tests**: React Testing Library
- **Integration Tests**: User flows
- **E2E Tests**: Full application workflows

---

## Deployment Considerations

### Environment Variables
```env
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=production
```

### Build Process
```bash
# Backend
cd backend
npm run build

# Frontend
cd frontend
npm run build
```

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] CORS configured for production domains
- [ ] Error logging configured
- [ ] Health check endpoint added

---

## Kiro Generation Guidelines

When generating new applications from this skeleton:

1. **Identify the domain** (e.g., spells, tasks, products)
2. **Define the data model** with appropriate fields
3. **Follow the module pattern** exactly as documented
4. **Maintain naming consistency** (plural for collections, singular for items)
5. **Use spooky terminology** in comments (curse containment, mystical validation, etc.)
6. **Keep controllers thin** - all logic in services
7. **Validate early** - Zod schemas at controller entry
8. **Handle errors consistently** - AppError for operational errors

---

## Conclusion

This Universal Fullstack Skeleton provides a battle-tested, consistent foundation for rapid application development. By following these patterns, Kiro can generate production-ready applications that are:

- **Type-safe** from database to UI
- **Maintainable** with clear separation of concerns
- **Consistent** across all applications
- **Scalable** with modular architecture
- **Spooky** with mystical terminology 👻

---

*Generated by Kiro for Skeleton Crew Hackathon 2024* 🎃
