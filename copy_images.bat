@echo off
echo ============================================
echo   Vinyasa Yoga Website - Image Copy Script
echo ============================================
echo.

echo Copying images from old Vinyasa project...
powershell -ExecutionPolicy Bypass -Command "Copy-Item -Path 'c:\Users\neha\OneDrive\Desktop\Vinyasa\assets\images\*' -Destination 'c:\Users\neha\OneDrive\Desktop\Vinyasa2\static\images\' -Recurse -Force"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Images copied successfully!
    echo.
    echo Listing copied images:
    dir "c:\Users\neha\OneDrive\Desktop\Vinyasa2\static\images\" /b
) else (
    echo.
    echo ✗ Error copying images. Please check the paths.
)

echo.
echo ============================================
pause
