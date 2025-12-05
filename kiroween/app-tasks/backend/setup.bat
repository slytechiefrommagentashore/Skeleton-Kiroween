@echo off
echo Setting up Tasks App Backend...
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies
    pause
    exit /b %errorlevel%
)

echo.
echo Step 2: Creating .env file...
if not exist .env (
    copy .env.example .env
    echo .env file created
) else (
    echo .env file already exists
)

echo.
echo Step 3: Generating Prisma Client...
call npm run prisma:generate
if %errorlevel% neq 0 (
    echo Failed to generate Prisma client
    pause
    exit /b %errorlevel%
)

echo.
echo Step 4: Running database migrations...
call npx prisma migrate dev --name init
if %errorlevel% neq 0 (
    echo Failed to run migrations
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo Setup complete! 
echo ========================================
echo.
echo To start the backend server, run:
echo   npm run dev
echo.
pause
