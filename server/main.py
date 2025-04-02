from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
import requests
import os, json
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

T5_MODEL_API = os.getenv("T5_CLOUD_API")

class URLRequest(BaseModel):
    url: HttpUrl
    
@app.post("/summarize")
async def summarize_content(request: URLRequest):
    try:
        response = requests.get(request.url)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to fetch webpage")

        soup = BeautifulSoup(response.text, "html.parser")

        for script in soup(["script", "style", "meta", "noscript"]):
            script.extract()

        text_content = ' '.join(soup.stripped_strings)
        
        model_response = requests.post(T5_MODEL_API, json={"data" : text_content})

        if model_response.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to summarize content")

        summary = model_response.json()['data'][0]['summary_text']

        return {"summary": summary}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
