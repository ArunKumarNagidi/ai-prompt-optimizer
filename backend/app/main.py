from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from app.services.gemini_services import analyze_prompt
from app.schemas.prompt_analysis import PromptAnalysis

app = FastAPI(
    title="AI Prompt Optimizer API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt : str


@app.post("/optimize",response_model=PromptAnalysis)

def optimize(data : PromptRequest):
    return analyze_prompt(data.prompt)

# @app.get("/")
# def root():
#     return {
#         "status": "ok",
#         "message": "AI Prompt Optimizer API is running"
#     }

# @app.get("/optimize-prompt")
# def test():
#     return {
#         "response" : optimize_prompt()
#     }