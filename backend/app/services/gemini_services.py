from google import genai
from dotenv import load_dotenv
from app.schemas.prompt_analysis import PromptAnalysis

from fastapi import HTTPException

import os
import json

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

SYSTEM_PROMPT = """
You are a world-class prompt engineering expert.

Your task is to analyze and improve user prompts.

Evaluate:

1. Clarity (0-100)
2. Context (0-100)
3. Specificity (0-100)
4. Constraints (0-100)
5. Output Format (0-100)
6. Creativity (0-100)

Provide:

- Overall score
- Category scores
- Issues found
- Improvement suggestions
- Fully optimized prompt

Return ONLY valid JSON.

{
  "overall_score": 0,
  "category_scores": {
    "clarity": 0,
    "context": 0,
    "specificity": 0,
    "constraints": 0,
    "output_format": 0,
    "creativity": 0
  },
  "issues": [],
  "suggestions": [],
  "optimized_prompt": ""
}
"""


def analyze_prompt(user_prompt: str):

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
{SYSTEM_PROMPT}

Analyze this prompt:

{user_prompt}
"""
    )

    raw_response = response.text.strip()

    if raw_response.startswith("```json"):
        raw_response = raw_response.replace("```json", "", 1)

    if raw_response.endswith("```"):
        raw_response = raw_response[:-3]

    raw_response = raw_response.strip()

    try:
        data = json.loads(raw_response)

        validated_response = PromptAnalysis(**data)

        return validated_response.model_dump()

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to parse Gemini response: {str(e)}"
        )