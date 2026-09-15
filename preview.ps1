$ErrorActionPreference = 'Stop'
$Port = 8080
Write-Host "AMBOS local preview: http://127.0.0.1:$Port" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor DarkGray
python -m http.server $Port --bind 127.0.0.1
