# PowerShell script to copy images from old Vinyasa project to new Vinyasa2 project

$sourcePath = "c:\Users\neha\OneDrive\Desktop\Vinyasa\assets\images"
$destPath = "c:\Users\neha\OneDrive\Desktop\Vinyasa2\static\images"

# Create destination folder if it doesn't exist
if (-not (Test-Path $destPath)) {
    New-Item -ItemType Directory -Path $destPath -Force
    Write-Host "Created directory: $destPath"
}

# Copy all files
if (Test-Path $sourcePath) {
    Copy-Item -Path "$sourcePath\*" -Destination $destPath -Recurse -Force
    Write-Host "Successfully copied images from $sourcePath to $destPath"
    
    # List copied files
    Write-Host "`nCopied files:"
    Get-ChildItem -Path $destPath | ForEach-Object { Write-Host "  - $($_.Name)" }
} else {
    Write-Host "ERROR: Source path does not exist: $sourcePath"
}
