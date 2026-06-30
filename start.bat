@echo off
title AI JobShield Pro

echo ======================================
echo      Starting AI JobShield Pro...
echo ======================================

echo.
echo Starting Backend...
start "Backend" cmd /k "cd backend && call venv\Scripts\activate && uvicorn main:app --reload"

timeout /t 3 >nul

echo.
echo Starting Frontend...
start "Frontend" cmd /k "cd frontend && npm run dev"

timeout /t 5 >nul

echo Opening AI JobShield Pro...
start http://localhost:5173

echo.
echo ======================================
echo AI JobShield Pro Started Successfully!
echo ======================================

pause