from pathlib import Path
import struct
import zlib

out = Path(r'c:\Users\Perfect\OneDrive\Desktop\careerhunt\client\public\DP World Careers.png')
width, height = 1400, 700
img = bytearray()
for y in range(height):
    img.append(0)
    for x in range(width):
        t = x / max(width - 1, 1)
        u = y / max(height - 1, 1)
        r = int(8 + 22 * (1 - t) + 14 * u)
        g = int(35 + 48 * (1 - t) + 18 * u)
        b = int(72 + 70 * (1 - t) + 34 * u)

        if 430 + 70 * (1 - u) - 35 * abs(x - 0.6 * width) / width > 0:
            glow = max(0, 150 - abs(x - 0.62 * width) * 0.12 - abs(y - 480) * 0.08)
            r += int(glow)
            g += int(glow * 0.7)
            b += int(glow * 0.35)

        if 410 < y < 620 and 330 < x < 1080 and ((x - 360) * (x - 360) / 280000) + ((y - 520) * (y - 520) / 95000) < 1:
            r = int(r * 0.72)
            g = int(g * 0.8)
            b = int(b * 0.9)

        if 470 < y < 620 and 160 < x < 450:
            r = int(r * 0.9)
            g = int(g * 0.92)
            b = int(b * 0.96)

        if 490 < y < 620 and 720 < x < 980:
            r = int(r * 0.87)
            g = int(g * 0.9)
            b = int(b * 0.95)

        if 520 < y < 620 and 1040 < x < 1185:
            r = int(r * 0.82)
            g = int(g * 0.9)
            b = int(b * 0.96)

        if 180 < y < 260 and abs(x - 720) < 180:
            r = min(255, r + 42)
            g = min(255, g + 55)
            b = min(255, b + 62)

        if 120 < y < 180 and abs(x - 1000) < 80:
            r = min(255, r + 82)
            g = min(255, g + 72)
            b = min(255, b + 65)

        img.extend((max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b))))


def chunk(kind, data):
    return struct.pack('!I', len(data)) + kind + data + struct.pack('!I', zlib.crc32(kind + data) & 0xFFFFFFFF)

raw = zlib.compress(img, 9)
png = bytearray(b'\x89PNG\r\n\x1a\n')
png.extend(chunk(b'IHDR', struct.pack('!IIBBBBB', width, height, 8, 2, 0, 0, 0)))
png.extend(chunk(b'IDAT', raw))
png.extend(chunk(b'IEND', b''))
out.write_bytes(png)
print(out)
