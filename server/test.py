import requests
from bs4 import BeautifulSoup

url = "https://timesofindia.indiatimes.com/india/parliament-budget-session-live-updates-waqf-amendment-bill-lok-sabha-rajya-sabha-bjp-nda-congress/liveblog/119890845.cms"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

for script in soup(["script", "style", "meta", "noscript"]):
    script.extract()

text_content = ' '.join(soup.stripped_strings)

print(text_content)