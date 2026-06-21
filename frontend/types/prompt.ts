export interface CategoryScores {
    clarity: number;
    context: number;
    specificity: number;
    constraints: number;
    output_format: number;
    creativity: number;
  }
  
  export interface PromptAnalysis {
    overall_score: number;
    category_scores: CategoryScores;
    issues: string[];
    suggestions: string[];
    optimized_prompt: string;
  }
  
  export interface OptimizePromptRequest {
    prompt: string;
  }
  
  export interface ApiError {
    detail: string;
  }