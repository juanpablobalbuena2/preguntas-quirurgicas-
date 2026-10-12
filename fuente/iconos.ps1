# powershell -File iconos.ps1  -> genera iconos/icono-180.png, icono-192.png e icono-512.png (hoja de historia clínica con tilde)
Add-Type -AssemblyName System.Drawing
$dir = Join-Path $PSScriptRoot 'iconos'
New-Item -ItemType Directory -Force $dir | Out-Null

function Redondeado($x, $y, $w, $h, $r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $p.AddArc($x, $y, 2 * $r, 2 * $r, 180, 90); $p.AddArc($x + $w - 2 * $r, $y, 2 * $r, 2 * $r, 270, 90)
  $p.AddArc($x + $w - 2 * $r, $y + $h - 2 * $r, 2 * $r, 2 * $r, 0, 90); $p.AddArc($x, $y + $h - 2 * $r, 2 * $r, 2 * $r, 90, 90)
  $p.CloseFigure(); $p
}

foreach ($n in 180, 192, 512) {
  $bmp = New-Object System.Drawing.Bitmap $n, $n
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $verde = [System.Drawing.ColorTranslator]::FromHtml('#0F5C52')
  $yodo = [System.Drawing.ColorTranslator]::FromHtml('#B8661A')
  $g.Clear($verde)
  $g.FillPath([System.Drawing.Brushes]::White, (Redondeado (0.27 * $n) (0.22 * $n) (0.46 * $n) (0.60 * $n) (0.05 * $n)))
  $g.FillPath((New-Object System.Drawing.SolidBrush $yodo), (Redondeado (0.40 * $n) (0.17 * $n) (0.20 * $n) (0.10 * $n) (0.03 * $n)))
  $linea = New-Object System.Drawing.Pen $verde, (0.035 * $n)
  $linea.StartCap = 'Round'; $linea.EndCap = 'Round'
  $g.DrawLine($linea, 0.36 * $n, 0.39 * $n, 0.64 * $n, 0.39 * $n)
  $g.DrawLine($linea, 0.36 * $n, 0.49 * $n, 0.56 * $n, 0.49 * $n)
  $tilde = New-Object System.Drawing.Pen $yodo, (0.055 * $n)
  $tilde.StartCap = 'Round'; $tilde.EndCap = 'Round'; $tilde.LineJoin = 'Round'
  $g.DrawLines($tilde, [System.Drawing.PointF[]]@(
    (New-Object System.Drawing.PointF (0.38 * $n), (0.65 * $n)),
    (New-Object System.Drawing.PointF (0.46 * $n), (0.72 * $n)),
    (New-Object System.Drawing.PointF (0.63 * $n), (0.57 * $n))))
  $bmp.Save((Join-Path $dir "icono-$n.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}
