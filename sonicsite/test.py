import requests

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryrkEmjyQM7BBHuGHs',
    'origin': 'https://anaykr15hn4.github.io',
    'priority': 'u=0, i',
    'referer': 'https://anaykr15hn4.github.io/',
    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
}
for i in range(5):
    files = {
        'name': (None, 'sffasf'),
        'email': (None, 'fasfasf@gmail.com'),
        'phone': (None, 'as'),
        'photos': ('', '', 'application/octet-stream'),
        'order': (None, 'asf'),
        'terms-consent': (None, 'on'),
        '_captcha': (None, 'false'),
        '_next': (None, 'https://anaykr15hn4.github.io/Captur/sonicsite/thank-you'),
        '_subject': (None, 'New Order Submission'),
        '_honey': (None, ''),
    }

    response = requests.post('https://formsubmit.co/captur.nj@gmail.com', headers=headers, files=files)