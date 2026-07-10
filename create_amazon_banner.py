from PIL import Image, ImageDraw

img = Image.new('RGB', (1600, 900), '#0f172a')
draw = ImageDraw.Draw(img)

for y in range(0, 900, 12):
    draw.line([(0, y), (1600, y)], fill=(255, 153, 0) if (y // 12) % 2 else (20, 47, 62), width=1)

for i in range(0, 1600, 80):
    draw.rectangle([i, 0, i + 80, 900], fill=(20, 47, 62))

draw.ellipse([180, 140, 440, 400], fill='#FF9900')
draw.ellipse([1100, 120, 1320, 340], fill='#146EB4')
draw.ellipse([980, 500, 1300, 820], fill='#232F3E')
draw.rounded_rectangle([220, 180, 1380, 700], radius=40, fill=(255, 255, 255), outline=(255, 153, 0), width=8)
draw.rounded_rectangle([320, 260, 1280, 640], radius=32, fill=(248, 250, 252), outline=(226, 232, 240), width=4)

draw.text((360, 340), 'Amazon Careers 2026', fill='#232F3E')
draw.text((360, 430), 'Global opportunities in tech, operations, cloud, logistics and more', fill='#475569')

img.save('public/Amazon Careers.png')
print('created public/Amazon Careers.png')
