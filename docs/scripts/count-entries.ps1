$baseDir = (Get-Location).Path
$libFile = "$baseDir\docs\components\PoetryLibrary.vue"
$navFile = "$baseDir\docs\components\PoemNav.vue"

$libContent = [System.IO.File]::ReadAllText($libFile, [System.Text.Encoding]::UTF8)
$navContent = [System.IO.File]::ReadAllText($navFile, [System.Text.Encoding]::UTF8)

$cats = @('tangshi','songci','yuanqu')
foreach ($c in $cats) {
  $libCount = ([regex]::Matches($libContent, "id: '$c/\d+'")).Count
  $navCount = ([regex]::Matches($navContent, "id: \d+,\s*title:")).Count  # too broad
  Write-Host "$c - PoetryLibrary entries: $libCount"
}

# Count PoemNav entries per category by parsing section
foreach ($c in $cats) {
  $pattern = "$c`: \[([^\]]+)\]"
  $m = [regex]::Match($navContent, $pattern)
  if ($m.Success) {
    $section = $m.Groups[1].Value
    $count = ([regex]::Matches($section, "id: \d+")).Count
    Write-Host "$c - PoemNav entries: $count"
  } else {
    Write-Host "$c - PoemNav entries: NOT FOUND"
  }
}
