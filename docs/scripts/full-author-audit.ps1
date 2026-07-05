$baseDir = (Get-Location).Path

$poemDirs = @(
  "$baseDir\docs\shici\tangshi",
  "$baseDir\docs\shici\songci",
  "$baseDir\docs\shici\yuanqu",
  "$baseDir\docs\shici\shijing",
  "$baseDir\docs\shici\chuci",
  "$baseDir\docs\shici\hanweishi",
  "$baseDir\docs\shici\yuefu",
  "$baseDir\docs\shici\nanbeichao",
  "$baseDir\docs\shici\wudai",
  "$baseDir\docs\shici\mingqingshi"
)

$referencedAuthors = @{}
foreach ($dir in $poemDirs) {
  if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -Filter '*.md'
    foreach ($file in $files) {
      $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
      $matches = [regex]::Matches($content, 'link="/authors/([^"]+)"')
      foreach ($m in $matches) {
        $authorId = $m.Groups[1].Value
        $dirName = Split-Path $dir -Leaf
        if (-not $referencedAuthors.ContainsKey($authorId)) { $referencedAuthors[$authorId] = @() }
        $referencedAuthors[$authorId] += "$dirName/$($file.Name)"
      }
    }
  }
}

# Read AuthorDetail.vue
$adContent = [System.IO.File]::ReadAllText("$baseDir\docs\components\AuthorDetail.vue", [System.Text.Encoding]::UTF8)
$definedAuthors = [regex]::Matches($adContent, "id: '([^']+)'") | ForEach-Object { $_.Groups[1].Value }

Write-Host "=== Referenced authors: $($referencedAuthors.Count) ==="
Write-Host "=== Defined authors: $($definedAuthors.Count) ==="

Write-Host ""
Write-Host "=== MISSING authors (referenced but not defined) ==="
$missingCount = 0
foreach ($authorId in ($referencedAuthors.Keys | Sort-Object)) {
  if ($authorId -notin $definedAuthors) {
    Write-Host "  MISSING: $authorId (files: $($referencedAuthors[$authorId] -join ', '))"
    $missingCount++
  }
}
Write-Host ""
Write-Host "Total missing: $missingCount"

# Also check for files with empty PoemAuthor
Write-Host ""
Write-Host "=== Files with empty PoemAuthor ==="
$emptyCount = 0
foreach ($dir in $poemDirs) {
  if (Test-Path -LiteralPath $dir) {
    $dirName = Split-Path $dir -Leaf
    $files = Get-ChildItem -LiteralPath $dir -Filter '*.md'
    foreach ($file in $files) {
      $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
      if ($content -match '<PoemAuthor\s*/>') {
        Write-Host "  EMPTY: $dirName/$($file.Name)"
        $emptyCount++
      }
    }
  }
}
Write-Host "Total empty PoemAuthor: $emptyCount"

# Check for PoemAuthor without link
Write-Host ""
Write-Host "=== Files with PoemAuthor but no link ==="
$noLinkCount = 0
foreach ($dir in $poemDirs) {
  if (Test-Path -LiteralPath $dir) {
    $dirName = Split-Path $dir -Leaf
    $files = Get-ChildItem -LiteralPath $dir -Filter '*.md'
    foreach ($file in $files) {
      $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
      if ($content -match '<PoemAuthor[^>]*name=' -and $content -notmatch '<PoemAuthor[^>]*link=') {
        Write-Host "  NO LINK: $dirName/$($file.Name)"
        $noLinkCount++
      }
    }
  }
}
Write-Host "Total PoemAuthor without link: $noLinkCount"
