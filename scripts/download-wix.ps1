# Aesthlos - one-time download of the live Wix site (HTML, images, PDFs, videos)
# Run from the Aesthlos folder:  powershell -ExecutionPolicy Bypass -File .\scripts\download-wix.ps1
# Safe to re-run: files that already exist are skipped.

$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ProgressPreference = 'SilentlyContinue'

$root  = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path (Join-Path $root 'CLAUDE.md'))) { $root = (Get-Location).Path }
$base  = 'https://www.aesthlos.com'
$ua    = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

$htmlDir  = Join-Path $root 'archive\html'
$mediaDir = Join-Path $root 'archive\media'
$fileDir  = Join-Path $root 'archive\files'
$videoDir = Join-Path $root 'archive\video'
foreach ($d in @($htmlDir, $mediaDir, $fileDir, $videoDir)) { New-Item -ItemType Directory -Force -Path $d | Out-Null }

$pages = @(
  @{slug='home'; path='/'},
  @{slug='ourphilosophy'; path='/ourphilosophy'},
  @{slug='thegreekhoneys'; path='/thegreekhoneys'},
  @{slug='thecompositions'; path='/thecompositions'},
  @{slug='honeycollection'; path='/honeycollection'},
  @{slug='contact'; path='/contact'},
  @{slug='copy-of-the-composition-of-earth'; path='/copy-of-the-composition-of-earth'},
  @{slug='compositionofearth'; path='/compositionofearth'},
  @{slug='compositionofwater'; path='/compositionofwater'},
  @{slug='compositionoffire'; path='/compositionoffire'},
  @{slug='compositionofair'; path='/compositionofair'},
  @{slug='compositionofaether'; path='/compositionofaether'},
  @{slug='aesthloswildoakhoney'; path='/aesthloswildoakhoney'},
  @{slug='aesthlosforesthoney'; path='/aesthlosforesthoney'}
)

function Get-File($url, $out) {
  if (Test-Path $out) { return $true }
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UserAgent $ua -UseBasicParsing -TimeoutSec 120
    return $true
  } catch {
    if (Test-Path $out) { Remove-Item $out -Force }
    return $false
  }
}

$allHtml = ''
Write-Host '== 1/4 Pages ==' -ForegroundColor Cyan
foreach ($p in $pages) {
  $out = Join-Path $htmlDir ($p.slug + '.html')
  if (Get-File ($base + $p.path) $out) { Write-Host "  ok   $($p.path)" } else { Write-Host "  FAIL $($p.path)" -ForegroundColor Red }
  if (Test-Path $out) { $allHtml += [IO.File]::ReadAllText($out, [Text.Encoding]::UTF8) }
}
# German versions (?lang=de) for reference
$deDir = Join-Path $htmlDir 'de'
New-Item -ItemType Directory -Force -Path $deDir | Out-Null
foreach ($p in $pages) {
  $out = Join-Path $deDir ($p.slug + '.html')
  if (Get-File ($base + $p.path + '?lang=de') $out) { Write-Host "  ok   $($p.path)?lang=de" } else { Write-Host "  FAIL $($p.path)?lang=de" -ForegroundColor Red }
  if (Test-Path $out) { $allHtml += [IO.File]::ReadAllText($out, [Text.Encoding]::UTF8) }
}
# robots / sitemap for reference
Get-File "$base/robots.txt" (Join-Path $htmlDir 'robots.txt') | Out-Null
Get-File "$base/pages-sitemap.xml" (Join-Path $htmlDir 'pages-sitemap.xml') | Out-Null

Write-Host '== 2/4 Images (original resolution) ==' -ForegroundColor Cyan
$ids = [regex]::Matches($allHtml, '[0-9a-f]{6}_[0-9a-f]{32}(?:f000|~mv2)?\.(?:png|jpe?g|gif|webp|svg|avif)', 'IgnoreCase') |
       ForEach-Object { $_.Value } | Sort-Object -Unique
# Images that Wix only loads client-side (ourphilosophy slideshow)
$ids += @('21375d_db0c2a9e35474311b1f3622922651c03~mv2.avif',
          '21375d_0845d4f325f54674bf4620381b49d7af~mv2.avif',
          '21375d_5171ff074bc64747894bd0502f74ce97~mv2.avif')
$ids = $ids | Sort-Object -Unique
$ok = 0; $fail = @()
foreach ($id in $ids) {
  $out = Join-Path $mediaDir ($id -replace '~', '_')
  if (Get-File "https://static.wixstatic.com/media/$id" $out) { $ok++ } else { $fail += $id }
}
Write-Host "  $ok downloaded, $($fail.Count) failed"
$fail | ForEach-Object { Write-Host "  FAIL $_" -ForegroundColor Yellow }

Write-Host '== 3/4 PDFs ==' -ForegroundColor Cyan
$pdfs = [regex]::Matches($allHtml, '_files/ugd/[0-9a-zA-Z_]+\.pdf') | ForEach-Object { $_.Value } | Sort-Object -Unique
foreach ($f in $pdfs) {
  $name = Split-Path $f -Leaf
  if (Get-File "$base/$f" (Join-Path $fileDir $name)) { Write-Host "  ok   $name" } else { Write-Host "  FAIL $name" -ForegroundColor Red }
}

Write-Host '== 4/4 Videos ==' -ForegroundColor Cyan
$vids = [regex]::Matches($allHtml, 'video/([0-9a-f]{6}_[0-9a-f]{32})/') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
foreach ($v in $vids) {
  $done = $false
  foreach ($q in @('1080p', '720p', '480p')) {
    $out = Join-Path $videoDir "$v-$q.mp4"
    if (Get-File "https://video.wixstatic.com/video/$v/$q/mp4/file.mp4" $out) { Write-Host "  ok   $v ($q)"; $done = $true; break }
  }
  if (-not $done) { Write-Host "  FAIL $v" -ForegroundColor Red }
}

Write-Host '== 5/5 Uploaded fonts ==' -ForegroundColor Cyan
$fontDir = Join-Path $root 'archive\fonts'
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null
$fonts = [regex]::Matches($allHtml, 'ufonts/([0-9a-f]{6}_[0-9a-f]{32})/(woff2|woff|ttf)/file\.(?:woff2|woff|ttf)') |
         ForEach-Object { $_.Value } | Sort-Object -Unique
foreach ($f in $fonts) {
  $m = [regex]::Match($f, 'ufonts/([^/]+)/([^/]+)/')
  $name = $m.Groups[1].Value + '.' + $m.Groups[2].Value
  if (Get-File "https://static.wixstatic.com/$f" (Join-Path $fontDir $name)) { Write-Host "  ok   $name" } else { Write-Host "  FAIL $name" -ForegroundColor Red }
}

Write-Host ''
Write-Host 'Done. Tell Claude it finished.' -ForegroundColor Green
