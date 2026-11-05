#!/usr/bin/env python3
"""Brand faviconok generálása a public/logo-arany alapján (Google: min. 48px, négyzetes)."""
from __future__ import annotations

import base64
import io
import struct
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LOGO = PUBLIC / "brand" / "logo-arany.png"
BG = (20, 20, 20, 255)  # #141414 — jobban látszik a SERP-ben is

SIZES = (16, 32, 48, 64, 96, 192, 512)  # 32 + 48: ICO / Google minimum


def square_logo(size: int) -> Image.Image:
    src = Image.open(LOGO).convert("RGBA")
    w, h = src.size
    scale = min(size / w, size / h) * 0.88
    nw, nh = int(w * scale), int(h * scale)
    resized = src.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), BG)
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


def write_png(path: Path, img: Image.Image) -> None:
    img.save(path, format="PNG", optimize=True)


def write_ico(path: Path, images: list[Image.Image]) -> None:
    """Egyszerű ICO: PNG tömörített képek több méretben."""
    entries: list[tuple[int, int, bytes]] = []
    for img in images:
        s = img.size[0]
        buf = io.BytesIO()
        img.save(buf, format="PNG")
        entries.append((s, s, buf.getvalue()))

    # ICO header + directory
    offset = 6 + 16 * len(entries)
    parts = [struct.pack("<HHH", 0, 1, len(entries))]
    for w, h, data in entries:
        bw = 0 if w >= 256 else w
        bh = 0 if h >= 256 else h
        parts.append(
            struct.pack("<BBBBHHII", bw, bh, 0, 0, 1, 32, len(data), offset)
        )
        offset += len(data)
    for _, _, data in entries:
        parts.append(data)
    path.write_bytes(b"".join(parts))


def write_svg(path: Path, png_48: Image.Image) -> None:
    buf = io.BytesIO()
    png_48.save(buf, format="PNG")
    b64 = base64.standard_b64encode(buf.getvalue()).decode("ascii")
    path.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="Juliette Logistique">\n'
        f'  <image width="48" height="48" href="data:image/png;base64,{b64}"/>\n'
        f"</svg>\n",
        encoding="utf-8",
    )


def main() -> None:
    if not LOGO.is_file():
        raise SystemExit(f"Hiányzik: {LOGO}")

    by_size: dict[int, Image.Image] = {}
    for size in SIZES:
        img = square_logo(size)
        by_size[size] = img
        name = f"favicon-{size}.png"
        write_png(PUBLIC / name, img)
        print("wrote", name)

    write_ico(PUBLIC / "favicon.ico", [by_size[s] for s in (16, 32, 48)])
    print("wrote favicon.ico")
    write_svg(PUBLIC / "favicon.svg", by_size[48])
    print("wrote favicon.svg")


if __name__ == "__main__":
    main()
