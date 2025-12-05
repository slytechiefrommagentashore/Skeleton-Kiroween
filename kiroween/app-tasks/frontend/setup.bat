@echo off
echo Setting up Tasks App Frontend...
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo To start the frontend dev server, run:
echo   npm run dev
echo.
echo Then open http://localhost:5173 in your browser
echo.
pause
