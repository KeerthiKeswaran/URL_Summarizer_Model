# URL Summarizer Model  

URL Summarizer AI is a web-based tool that extracts and summarizes content from any webpage using FastAPI, BeautifulSoup, and a fine-tuned T5-small model deployed on Modelbit Cloud. The project allows users to input a URL, scrape its content, preprocess the text, and generate a concise summary.  

### HuggingFace Model Repo: 
### https://huggingface.co/KeerthiKeswaran/t5_small_ft_text_summarization

## System Architecture:

![Architecture](https://github.com/KeerthiKeswaran/URL_Summarizer_Model/blob/main/Architecture.png?raw=true)

The system consists of three main components:  

1. **Frontend (React)** - Users input a URL and receive the summarized content.  
2. **Backend (FastAPI & BeautifulSoup)** - Scrapes the webpage content, removes unnecessary elements like JavaScript, styles, and metadata, and sends preprocessed content to the model API.  
3. **Model (T5-small on Modelbit Cloud)** - Processes the cleaned text and returns a summarized version.

## Working Demo:

https://github.com/user-attachments/assets/6bfcb923-20ce-4fea-978c-4037fda5fed8


### Installation & Setup  

Clone the repository  

```bash
git clone https://github.com/your-username/url-summarizer-ai.git
cd url-summarizer-ai
```

For frontend setup  

```bash
cd client
npm i
npm run dev
```

For backend setup  

```bash
cd server
pip install -r requirements.txt
```

Create a `.env` file in the `server` directory and add  

```bash
T5_CLOUD_API="your_modelbit_api_endpoint"
```

Run the FastAPI server  

```bash
uvicorn main:app --reload
```

### API Endpoints  

**GET** `/health` → Check if the server is running  
Response  
```json
{"status": "healthy"}
```  

**POST** `/summarize`  
Body  
```json
{
  "url": "https://example.com/article"
}
```  

Response  
```json
{
  "summary": "This is the summarized content of the webpage."
}
```  

### Model Performance Optimization  

Currently, the model is running in the Modelbit CPU environment. The response time can be optimized by allocating the model to a GPU environment, which would significantly speed up the summarization process. Deploying the model on a cloud service with GPU support will enhance efficiency, reducing latency while handling multiple requests.  
