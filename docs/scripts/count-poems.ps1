$cats = @('tangshi','songci','yuanqu','shijing','chuci','hanweishi','yuefu','nanbeichao','wudai','mingqingshi')
$baseDir = (Get-Location).Path
foreach ($c in $cats) {
  $p = "$baseDir\docs\shici\$c"
  if (Test-Path -LiteralPath $p) {
    $n = (Get-ChildItem -LiteralPath $p -Filter '*.md').Count
    Write-Host "$c : $n"
  } else {
    Write-Host "$c : NOT FOUND"
  }
}
