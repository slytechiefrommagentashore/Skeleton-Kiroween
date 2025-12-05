# Implementation Plan

- [ ] 1. Set up project structure and dependencies
  - Copy skeleton-core structure to app-tasks folder
  - Update package.json files with app-tasks specific information
  - Install backend dependencies (express, prisma, zod, cors, dotenv)
  - Install frontend dependencies (react, react-router-dom, tailwindcss)
  - Configure TypeScript for both backend and frontend
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 2. Implement backend data layer
  - [ ] 2.1 Create Prisma schema for Task model
    - Define Task model with id, title, status, createdAt, updatedAt fields
    - Set up SQLite as database provider
    - Configure default values and constraints
    - _Requirements: 1.1, 1.3_

  - [ ] 2.2 Create Zod validation schemas
    - Implement createTaskSchema with title validation (1-200 chars)
    - Implement updateTaskSchema with optional title and status
    - Define TaskStatus enum type
    - _Requirements: 1.2, 3.1, 3.4_

  - [ ] 2.3 Implement Task service layer
    - Create getAllTasks method with date ordering
    - Create getTaskById method with 404 handling
    - Create createTask method with validation
    - Create updateTask method with validation and 404 handling
    - Create deleteTask method with 404 handling
    - _Requirements: 1.1, 1.4, 2.1, 2.2, 3.2, 3.3, 4.1, 4.2_

  - [ ]* 2.4 Write property test for task creation validation
    - **Property 2: Task creation with invalid input fails**
    - **Validates: Requirements 1.2**

  - [ ]* 2.5 Write property test for task update identity preservation
    - **Property 4: Task update preserves identity**
    - **Validates: Requirements 3.1, 3.2, 3.4**

- [ ] 3. Implement backend API layer
  - [ ] 3.1 Create Task controller
    - Implement getAll handler with error handling
    - Implement getById handler with error handling
    - Implement create handler with validation
    - Implement update handler with validation
    - Implement delete handler with error handling
    - Use ApiResponse format for all responses
    - _Requirements: 1.4, 2.3, 3.2, 4.3, 5.1, 5.2, 5.3, 5.4_

  - [ ] 3.2 Create Task router
    - Define GET /api/tasks route
    - Define GET /api/tasks/:id route
    - Define POST /api/tasks route
    - Define PUT /api/tasks/:id route
    - Define DELETE /api/tasks/:id route
    - _Requirements: 5.1_

  - [ ] 3.3 Register Task router in main app
    - Import task router in app.ts
    - Mount router at /api/tasks path
    - Ensure error handler is registered after routes
    - _Requirements: 5.1_

  - [ ]* 3.4 Write property test for non-existent task operations
    - **Property 5: Operations on non-existent tasks fail appropriately**
    - **Validates: Requirements 3.3, 4.2**

  - [ ]* 3.5 Write property test for API response format consistency
    - **Property 7: API responses follow consistent format**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4**

- [ ] 4. Implement shared types
  - [ ] 4.1 Create shared TypeScript types
    - Define Task interface
    - Define TaskStatus type
    - Define CreateTaskInput interface
    - Define UpdateTaskInput interface
    - Ensure consistency with backend schemas
    - _Requirements: 1.1, 2.3, 3.1_

- [ ] 5. Implement frontend components
  - [ ] 5.1 Create TaskCard component
    - Display task title, status, and creation date
    - Implement status badge with color coding
    - Add Edit and Delete action buttons
    - Handle loading states during actions
    - _Requirements: 6.2, 6.3_

  - [ ] 5.2 Create TaskForm component
    - Implement title input with validation
    - Implement status dropdown (pending, in-progress, completed)
    - Add form validation and error display
    - Handle submit and cancel actions
    - Show loading state during submission
    - _Requirements: 1.2, 3.1, 6.3, 6.4_

  - [ ]* 5.3 Write unit tests for TaskCard component
    - Test rendering with different task statuses
    - Test button click handlers
    - Test date formatting

  - [ ]* 5.4 Write unit tests for TaskForm component
    - Test form validation
    - Test submit handler
    - Test error display

- [ ] 6. Implement frontend pages
  - [ ] 6.1 Create TaskListPage
    - Fetch and display all tasks using API client
    - Implement grid layout for task cards
    - Add "Create Task" button navigation
    - Handle task deletion with confirmation
    - Show loading state during fetch
    - Show empty state when no tasks exist
    - Display error messages on API failures
    - _Requirements: 2.1, 2.2, 2.3, 4.1, 4.4, 6.1, 6.2, 6.3, 6.4_

  - [ ] 6.2 Create CreateTaskPage
    - Render TaskForm component
    - Handle form submission via API client
    - Navigate to task list on success
    - Display error messages on failure
    - Show loading state during creation
    - _Requirements: 1.1, 1.2, 1.4, 6.3, 6.4_

  - [ ]* 6.3 Write property test for task list consistency
    - **Property 3: Task list retrieval is consistent**
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

  - [ ]* 6.4 Write property test for task deletion
    - **Property 6: Task deletion removes task completely**
    - **Validates: Requirements 4.1, 4.3, 4.4**

- [ ] 7. Implement routing and navigation
  - [ ] 7.1 Configure React Router
    - Set up BrowserRouter in App.tsx
    - Define route for TaskListPage (/)
    - Define route for CreateTaskPage (/tasks/create)
    - Add navigation header with app title
    - _Requirements: 6.1_

  - [ ] 7.2 Implement navigation flows
    - Add navigation from list to create page
    - Add navigation from create page back to list
    - Handle browser back button correctly
    - _Requirements: 6.1, 6.3_

- [ ] 8. Configure API client integration
  - [ ] 8.1 Extend API client with task methods
    - Implement getTasks() method
    - Implement getTask(id) method
    - Implement createTask(data) method
    - Implement updateTask(id, data) method
    - Implement deleteTask(id) method
    - Handle error responses appropriately
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 8.2 Write property test for task creation success
    - **Property 1: Task creation with valid input succeeds**
    - **Validates: Requirements 1.1, 1.3, 1.4**

- [ ] 9. Set up database and environment
  - [ ] 9.1 Configure database
    - Create .env file from .env.example
    - Set DATABASE_URL for SQLite
    - Run prisma generate to create client
    - Run prisma migrate to create tables
    - _Requirements: 1.1, 1.3_

  - [ ] 9.2 Add seed data (optional)
    - Create sample tasks for development
    - Implement seed script in package.json
    - _Requirements: 2.1_

- [ ] 10. Final integration and testing
  - [ ] 10.1 Test complete CRUD workflow
    - Verify task creation flow
    - Verify task list display
    - Verify task update flow
    - Verify task deletion flow
    - Test error handling paths
    - _Requirements: 1.1, 1.2, 1.4, 2.1, 2.2, 3.2, 3.3, 4.1, 4.2_

  - [ ] 10.2 Verify UI responsiveness
    - Test on desktop viewport
    - Test on tablet viewport
    - Test on mobile viewport
    - Verify loading states work correctly
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ]* 10.3 Run all property-based tests
    - Execute all 7 property tests with 100+ iterations
    - Verify all properties pass
    - Fix any discovered edge cases

- [ ] 11. Documentation and README
  - [ ] 11.1 Create comprehensive README
    - Document setup instructions
    - List API endpoints
    - Describe project structure
    - Add usage examples
    - Include tech stack information
    - _Requirements: 5.1_

  - [ ] 11.2 Add inline code documentation
    - Document complex business logic
    - Add JSDoc comments to public APIs
    - Document component props
    - _Requirements: 5.1_
