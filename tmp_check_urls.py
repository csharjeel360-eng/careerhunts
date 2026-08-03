import urllib.request
urls=['https://careerhunt.online/sitemap.xml','https://careerhunt.online/jobs','https://careerhunt.online/jobs/amazon-careers-2026']
for url in urls:
    req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            print(url, '->', resp.status, resp.getheader('content-type'))
            print(resp.read(400).decode('utf-8','ignore'))
    except Exception as e:
        print(url, 'ERROR', e)
