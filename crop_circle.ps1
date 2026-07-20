# crop_circle.ps1 — crops me.png into a circle and saves as me_circle.png using .NET System.Drawing
Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Tommy\Desktop\Projects\portfolio\src\assets\me.png"
$destPath = "c:\Users\Tommy\Desktop\Projects\portfolio\src\assets\me_circle.png"

if (Test-Path $srcPath) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $size = [System.Math]::Min($srcImg.Width, $srcImg.Height)
    
    # Target size 128x128 for optimized fast-loading favicon
    $targetSize = 128
    
    $bmp = New-Object System.Drawing.Bitmap $targetSize, $targetSize
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # High quality settings
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    # Clear transparent
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Define circular path
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $targetSize, $targetSize)
    
    # Clip drawing area to the circular path
    $g.SetClip($path)
    
    # Draw original image scaled to target circle size
    $g.DrawImage($srcImg, 0, 0, $targetSize, $targetSize)
    
    # Save as PNG to preserve transparency
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $bmp.Dispose()
    $srcImg.Dispose()
    
    Write-Host "Success: Circular image saved to $destPath"
} else {
    Write-Error "Source file not found at $srcPath"
}
