@echo off
echo Checking Tasks App Backend Setup...
echo.

echo [1/4] Checking if node_modules exists...
if exist node_modules (
    echo ✓ Dependencies installed
) else (
    echo ✗ Dependencies NOT installed - Run: npm install
)

echo.
echo [2/4] Checking if .env file exists...
if exist .env (
    echo ✓ .env file exists
) else (
    echo ✗ .env file NOT found - Run: copy .env.example .env
)

echo.
echo [3/4] Checking if Prisma Client is generated...
if exist node_modules\.prisma (
    echo ✓ Prisma Client generated
) else (
    echo ✗ Prisma Client NOT generated - Run: npm run prisma:generate
)

echo.
echo [4/4] Checking if database exists...
if exist prisma\dev.db (
    echo ✓ Database file exists
) else (
    echo ✗ Database NOT created - Run: npm run prisma:migrate
)

echo.
echo ========================================
echo Setup Check Complete
echo ========================================
echo.
pause
