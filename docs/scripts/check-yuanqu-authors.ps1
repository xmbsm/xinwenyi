$baseDir = (Get-Location).Path

# Get all author IDs referenced in yuanqu 13-40
$yuanquDir = "$baseDir\docs\shici\yuanqu"
$referenced = @{}
for ($i = 13; $i -le 40; $i++) {
  $file = "$yuanquDir\$i.md"
  if (Test-Path -LiteralPath $file) {
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    $matches = [regex]::Matches($content, 'link="/authors/([^"]+)"')
    foreach ($m in $matches) {
      $aid = $m.Groups[1].Value
      if (-not $referenced.ContainsKey($aid)) { $referenced[$aid] = @() }
      $referenced[$aid] += "$i.md"
    }
  }
}

# Read AuthorDetail.vue and [id].paths.js
$adContent = [System.IO.File]::ReadAllText("$baseDir\docs\components\AuthorDetail.vue", [System.Text.Encoding]::UTF8)
$pathsContent = [System.IO.File]::ReadAllText("$baseDir\docs\authors\[id].paths.js", [System.Text.Encoding]::UTF8)

Write-Host "=== Yuanqu 13-40 referenced authors ==="
foreach ($aid in ($referenced.Keys | Sort-Object)) {
  $inDetail = $adContent -match "id: '$aid'"
  $inPaths = $pathsContent -match "id: '$aid'"
  $status = if ($inDetail -and $inPaths) { "OK" } else { "MISSING (detail=$inDetail, paths=$inPaths)" }
  Write-Host "  $aid : $status (files: $($referenced[$aid] -join ', '))"
}
