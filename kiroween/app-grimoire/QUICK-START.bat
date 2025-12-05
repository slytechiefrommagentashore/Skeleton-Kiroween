@echo off
echo.
echo ========================================
echo    🔮 GRIMOIRE QUICK START 🔮
echo ========================================
echo.

echo [1/4] Generating Prisma Client...
cd backend
call npx prisma generate
if %errorlevel% neq 0 (
    echo ❌ Failed to generate Prisma client
    pause
    exit /b 1
)

echo.
echo [2/4] Pushing database schema...
call npx prisma db push
if %errorlevel% neq 0 (
    echo ❌ Failed to push database schema
    pause
    exit /b 1
)

echo.
echo [3/4] Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo [4/4] Installing frontend dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

cd ..

echo.
echo ========================================
echo    ✅ SETUP COMPLETE! ✅
echo ========================================
echo.
echo To start the application:
echo.
echo Backend:  cd backend  ^&^& npm run dev
echo Frontend: cd frontend ^&^& npm run dev
echo.
echo Then visit: http://localhost:5173
echo.
pause
