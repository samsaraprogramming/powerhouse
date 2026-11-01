"""Make smaller copies of the site's photos for phones and record them for the <img srcset> helper.

Run after adding or replacing a photo:  python3 scripts/resize-images.py
Writes name-<width>.webp next to each photo and src/data/image-sizes.json.
Each URL carries ?v=<content hash>, so a replaced photo gets a new URL and browsers
fetch it right away despite the long cache on /images/*.
Requires Pillow (pip install pillow).
"""
import hashlib
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'public' / 'images'
# Folder -> widths to generate. Team photos also get a small size for the reviewer avatar.
WIDTHS = {'services': [480, 800], 'conditions': [480, 800], 'library': [480, 800], 'team': [160, 480]}


def versioned(folder, path):
    return f'/images/{folder}/{path.name}?v={hashlib.md5(path.read_bytes()).hexdigest()[:8]}'


manifest = {}
for folder, widths in WIDTHS.items():
    for path in sorted((IMAGES / folder).glob('*.webp')):
        if ' ' in path.name:
            continue  # an iCloud duplicate such as "photo 2.webp"
        if path.stem.rsplit('-', 1)[-1].isdigit():
            continue  # a generated size
        with Image.open(path) as im:
            w, h = im.size
            sizes = []
            for target in widths:
                if target >= w:
                    continue
                out = path.with_name(f'{path.stem}-{target}.webp')
                im.resize((target, round(h * target / w)), Image.LANCZOS).save(out, 'WEBP', quality=78, method=6)
                sizes.append([versioned(folder, out), target])
            sizes.append([versioned(folder, path), w])
            manifest[f'/images/{folder}/{path.name}'] = sizes

(ROOT / 'src' / 'data' / 'image-sizes.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'{len(manifest)} photos')
