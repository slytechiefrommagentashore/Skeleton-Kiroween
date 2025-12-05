# Setup Instructions

Follow these steps to get the Tasks App running:

## Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd app-tasks/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   copy .env.example .env
   ```
   (On Mac/Linux use `cp .env.example .env`)

4. **Generate Prisma Client:**
   ```bash
   npm run prisma:generate
   ```

5. **Run database migrations:**
   ```bash
   npm run prisma:migrate
   ```
   When prompted for a migration name, enter: `init`

6. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   You should see: `🚀 Tasks App Backend running on port 3000`

## Frontend Setup

**Open a NEW terminal window/tab** and:

1. **Navigate to frontend directory:**
   ```bash
   cd app-tasks/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   
   You should see the Vite dev server running on `http://localhost:5173`

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Troubleshooting

### Error: "Cannot find module '@prisma/client'"
- Run `npm run prisma:generate` in the backend directory

### Error: "Table 'Task' does not exist"
- Run `npm run prisma:migrate` in the backend directory

### Error: "500 Internal Server Error" or "Failed to fetch"
- Make sure the backend server is running on port 3000
- Check the backend terminal for error messages

### Error: "Port 3000 is already in use"
- Stop any other processes using port 3000
- Or change the PORT in backend/.env file

### React Router warnings (yellow text in console)
- These are just warnings about future React Router versions
- They don't affect functionality and can be ignored

## Verify Everything Works

1. Backend health check: Visit `http://localhost:3000/health`
   - Should return: `{"status":"ok","timestamp":"..."}`

2. API test: Visit `http://localhost:3000/api/tasks`
   - Should return: `{"success":true,"data":[]}`

3. Frontend: Visit `http://localhost:5173`
   - Should show "Tasks App" with "Create Task" button
