# Design Document

## Overview

The Tasks App is a full-stack CRUD application built on the skeleton-core boilerplate. It implements a task management system with an Express + Prisma backend and React + Vite frontend. The architecture follows a modular pattern with clear separation between data access, business logic, and presentation layers.

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ TaskListPage │  │CreateTaskPage│  │  Components  │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │              │
│         └──────────────────┴──────────────────┘              │
│                            │                                 │
│                     ┌──────▼───────┐                         │
│                     │  API Client  │                         │
│                     └──────┬───────┘                         │
└────────────────────────────┼─────────────────────────────────┘
                             │ HTTP/JSON
┌────────────────────────────▼─────────────────────────────────┐
│                         Backend                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Router     │─▶│  Controller  │─▶│   Service    │      │
│  └──────────────┘  └──────────────┘  └──────┬───────┘      │
│                                              │              │
│                                       ┌──────▼───────┐      │
│                                       │    Prisma    │      │
│                                       └──────┬───────┘      │
└──────────────────────────────────────────────┼──────────────┘
                                               │
                                        ┌──────▼───────┐
                                        │   SQLite     │
                                        └──────────────┘
```

### Technology Stack

**Backend:**
- Express.js for HTTP server
- Prisma ORM for database access
- Zod for request validation
- SQLite for data persistence
- TypeScript for type safety

**Frontend:**
- React 18 with hooks
- React Router for navigation
- TailwindCSS for styling
- Vite for build tooling
- TypeScript for type safety

## Components and Interfaces

### Backend Components

#### 1. Task Model (Prisma Schema)

```prisma
model Task {
  id        String   @id @default(cuid())
  title     String
  status    String   @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### 2. Task Schema (Zod Validation)

```typescript
// createTaskSchema
{
  title: string (min: 1, max: 200)
}

// updateTaskSchema
{
  title?: string (min: 1, max: 200)
  status?: string (enum: "pending" | "in-progress" | "completed")
}
```

#### 3. Task Service

**Methods:**
- `getAllTasks()`: Returns all tasks ordered by creation date
- `getTaskById(id: string)`: Returns a single task or throws 404
- `createTask(data: CreateTaskInput)`: Creates and returns new task
- `updateTask(id: string, data: UpdateTaskInput)`: Updates and returns task
- `deleteTask(id: string)`: Deletes task and returns confirmation

#### 4. Task Controller

**Endpoints:**
- `GET /api/tasks`: Get all tasks
- `GET /api/tasks/:id`: Get task by ID
- `POST /api/tasks`: Create new task
- `PUT /api/tasks/:id`: Update task
- `DELETE /api/tasks/:id`: Delete task

All responses use `ApiResponse<T>` format.

#### 5. Task Router

Maps HTTP routes to controller methods with proper HTTP verbs.

### Frontend Components

#### 1. Pages

**TaskListPage:**
- Displays all tasks in a grid layout
- Shows "Create Task" button
- Handles task deletion
- Shows loading and error states

**CreateTaskPage:**
- Form for creating new tasks
- Title input with validation
- Status dropdown (pending, in-progress, completed)
- Submit and cancel buttons

#### 2. Components

**TaskCard:**
- Displays task title, status, and creation date
- Edit and Delete action buttons
- Status badge with color coding

**TaskForm:**
- Reusable form for create/edit operations
- Input validation
- Error display
- Loading states

#### 3. API Client

Extends the skeleton-core API client with task-specific methods:
- `getTasks()`: Fetch all tasks
- `getTask(id)`: Fetch single task
- `createTask(data)`: Create new task
- `updateTask(id, data)`: Update task
- `deleteTask(id)`: Delete task

## Data Models

### Task Entity

```typescript
interface Task {
  id: string;           // CUID identifier
  title: string;        // Task description (1-200 chars)
  status: TaskStatus;   // Current state
  createdAt: string;    // ISO timestamp
  updatedAt: string;    // ISO timestamp
}

type TaskStatus = "pending" | "in-progress" | "completed";
```

### API Request/Response Types

```typescript
interface CreateTaskInput {
  title: string;
  status?: TaskStatus;
}

interface UpdateTaskInput {
  title?: string;
  status?: TaskStatus;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Task creation with valid input succeeds

*For any* valid task title (non-empty string, 1-200 characters), creating a task should succeed and return a task object with a unique ID, the provided title, default "pending" status, and timestamps.

**Validates: Requirements 1.1, 1.3, 1.4**

### Property 2: Task creation with invalid input fails

*For any* invalid task title (empty string, whitespace only, or exceeding 200 characters), the system should reject the creation request and return a validation error without creating a database entry.

**Validates: Requirements 1.2**

### Property 3: Task list retrieval is consistent

*For any* state of the database, retrieving the task list should return all existing tasks ordered by creation date (newest first), and the operation should complete within 500ms.

**Validates: Requirements 2.1, 2.2, 2.3, 2.4**

### Property 4: Task update preserves identity

*For any* existing task and valid update data, updating the task should preserve the task ID and creation timestamp while modifying only the specified fields (title and/or status).

**Validates: Requirements 3.1, 3.2, 3.4**

### Property 5: Operations on non-existent tasks fail appropriately

*For any* non-existent task ID, attempts to retrieve, update, or delete should return a 404 error without modifying the database.

**Validates: Requirements 3.3, 4.2**

### Property 6: Task deletion removes task completely

*For any* existing task, deleting it should remove it from the database such that subsequent list operations do not include it and attempts to retrieve it by ID return 404.

**Validates: Requirements 4.1, 4.3, 4.4**

### Property 7: API responses follow consistent format

*For all* API operations, successful responses should return `{ success: true, data: T }` with appropriate HTTP status codes (200/201), and error responses should return `{ success: false, error: string }` with appropriate error status codes (400/404/500).

**Validates: Requirements 5.1, 5.2, 5.3, 5.4**

## Error Handling

### Backend Error Handling

1. **Validation Errors (400)**
   - Empty or invalid task titles
   - Invalid status values
   - Malformed request bodies

2. **Not Found Errors (404)**
   - Task ID does not exist
   - Invalid route endpoints

3. **Server Errors (500)**
   - Database connection failures
   - Unexpected runtime errors

All errors use the centralized `errorHandler` middleware and return consistent `ApiResponse` format.

### Frontend Error Handling

1. **Network Errors**
   - Display user-friendly error messages
   - Retry mechanisms for failed requests

2. **Validation Errors**
   - Inline form validation
   - Clear error messages below inputs

3. **Component Errors**
   - ErrorBoundary catches React errors
   - Graceful fallback UI

## Testing Strategy

### Unit Testing

**Backend:**
- Service layer methods (create, read, update, delete)
- Validation schema edge cases
- Error handling paths

**Frontend:**
- Component rendering
- Form validation logic
- API client methods

### Property-Based Testing

We will use **fast-check** for TypeScript property-based testing with a minimum of 100 iterations per property.

Each property test must include a comment tag in this format:
```typescript
// Feature: app-tasks, Property 1: Task creation with valid input succeeds
```

**Property Tests to Implement:**

1. **Property 1**: Generate random valid titles (1-200 chars), create tasks, verify all have unique IDs, correct titles, "pending" status, and valid timestamps

2. **Property 2**: Generate random invalid titles (empty, whitespace, >200 chars), attempt creation, verify all fail with validation errors and no database changes

3. **Property 3**: Generate random sets of tasks, insert them, retrieve list, verify all tasks present, correctly ordered, and retrieval time <500ms

4. **Property 4**: Generate random tasks and random valid updates, apply updates, verify ID and createdAt unchanged, specified fields updated

5. **Property 5**: Generate random non-existent IDs, attempt get/update/delete, verify all return 404 and database unchanged

6. **Property 6**: Generate random tasks, insert them, delete each, verify not in list and get returns 404

7. **Property 7**: Generate random valid and invalid operations, verify all responses match `ApiResponse<T>` format with correct status codes

### Integration Testing

- End-to-end API tests for all CRUD operations
- Frontend-backend integration tests
- Database transaction tests

### Manual Testing

- UI responsiveness across devices
- User workflow testing
- Visual regression testing

## Performance Considerations

- Database queries use indexes on `id` and `createdAt`
- Task list endpoint should respond within 500ms
- Frontend uses React.memo for TaskCard components
- Optimistic UI updates for better perceived performance

## Security Considerations

- Input validation on both frontend and backend
- SQL injection prevention via Prisma parameterized queries
- CORS configuration for API access
- Environment variable protection for sensitive data

## Deployment Strategy

1. Backend: Node.js server with Prisma migrations
2. Frontend: Static build deployed to CDN
3. Database: SQLite for development, PostgreSQL for production
4. Environment: Separate dev/staging/production configurations
