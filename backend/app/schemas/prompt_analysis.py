from pydantic import BaseModel

class CategoryScores(BaseModel):
    clarity : int
    context : int
    specificity : int
    constraints : int
    output_format : int
    creativity : int

class PromptAnalysis(BaseModel):

    overall_score : int
    category_scores : CategoryScores
    issues : list[str]

    suggestions : list[str]
    optimized_prompt : str