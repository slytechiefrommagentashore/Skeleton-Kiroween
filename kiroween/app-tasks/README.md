# Tasks App

A minimal task management application built on the skeleton-core boilerplate. Demonstrates full CRUD operations with Express + Prisma backend and React + Vite frontend.

## Features

- ✅ Create tasks with title and status
- ✅ View all tasks in a grid layout
- ✅ Update task status (pending → in-progress → completed)
- ✅ Delete tasks with confirmation
- ✅ Clean, responsive UI
- ✅ Full-stack TypeScript
- ✅ Real-time status updates

## Quick Setup

### Option 1: Using Setup Scripts (Windows)

**Backend:**
```bash
cd app-tasks/backend
setup.bat
npm run dev
```

**Frontend (in a new terminal):**
```bash
cd app-tasks/frontend
setup.bat
npm run dev
```

### Option 2: Manual Setup

**Backend:**
```bash
cd app-tasks/backend
npm install
copy .env.example .env          # On Mac/Linux: cp .env.example .env
npm run prisma:generate
npm run prisma:migrate          # Enter "init" when prompted for migration name
npm run dev
```

Backend runs on `http://localhost:3000`

**Frontend (open a new terminal):**
```bash
cd app-tasks/frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Verify Setup

1. Check backend health: `http://localhost:3000/health`
2. Check API: `http://localhost:3000/api/tasks`
3. Open app: `http://localhost:5173`

See [SETUP.md](./SETUP.md) for detailed troubleshooting.

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create new task
  ```json
  {
    "title": "Task title",
    "status": "pending" // optional: pending | in-progress | completed
  }
  ```
- `PUT /api/tasks/:id` - Update task
  ```json
  {
    "title": "Updated title", // optional
    "status": "completed" // optional
  }
  ```
- `DELETE /api/tasks/:id` - Delete task

## Tech Stack

### Backend
- Express.js - HTTP server
- Prisma ORM - Database access
- SQLite - Data persistence
- Zod - Request validation
- TypeScript - Type safety

### Frontend
- React 18 - UI framework
- React Router - Navigation
- TailwindCSS - Styling
- Vite - Build tool
- TypeScript - Type safety

## Project Structure

```
app-tasks/
├── backend/
│   ├── src/
│   │   ├── modules/tasks/
│   │   │   ├── controller.ts    # HTTP request handlers
│   │   │   ├── service.ts       # Business logic
│   │   │   ├── router.ts        # Route definitions
│   │   │   └── schema.ts        # Zod validation
│   │   ├── common/
│   │   │   ├── error.ts         # Error handling
│   │   │   └── response.ts      # API response helpers
│   │   ├── config/
│   │   │   └── env.ts           # Environment config
│   │   ├── app.ts               # Express app setup
│   │   └── server.ts            # Server entry point
│   └── prisma/
│       └── schema.prisma        # Database schema
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── TaskCard.tsx     # Task display card
│       │   ├── TaskForm.tsx     # Task creation form
│       │   ├── Button.tsx       # Reusable button
│       │   ├── Input.tsx        # Reusable input
│       │   ├── Card.tsx         # Reusable card
│       │   └── ErrorBoundary.tsx
│       ├── pages/
│       │   ├── TaskListPage.tsx # Main task list
│       │   └── CreateTaskPage.tsx
│       ├── lib/
│       │   └── api.ts           # API client
│       └── App.tsx              # App root
└── shared/
    └── types.ts                 # Shared TypeScript types
```

## Task Status Flow

Tasks can transition through three states:

1. **Pending** (default) - Task is created but not started
2. **In Progress** - Task is being worked on
3. **Completed** - Task is finished

The "Progress" button cycles through these states. Completed tasks can be reopened.

## Development

### Database Migrations

```bash
cd backend
npm run prisma:migrate
```

### View Database

```bash
cd backend
npm run prisma:studio
```

### Build for Production

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## Architecture

The app follows a clean architecture pattern:

- **Controller Layer**: Handles HTTP requests/responses
- **Service Layer**: Contains business logic
- **Data Layer**: Prisma ORM for database access
- **Validation Layer**: Zod schemas for input validation

All API responses use a consistent `ApiResponse<T>` format:

```typescript
{
  success: boolean;
  data?: T;
  error?: string;
}
```

## Error Handling

- **400 Bad Request**: Validation errors (empty title, invalid status)
- **404 Not Found**: Task doesn't exist
- **500 Internal Server Error**: Unexpected errors

All errors are caught by centralized error handler and return consistent format.
