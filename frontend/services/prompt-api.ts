import { PromptAnalysis } from "@/types/prompt";

const API_BASE_URL = "http://localhost:8000";

export async function optimizePrompt(
  prompt: string
): Promise<PromptAnalysis> {
  try {
    const response = await fetch(`${API_BASE_URL}/optimize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        errorData.detail || "Failed to optimize prompt"
      );
    }

    const data: PromptAnalysis = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Unexpected error occurred");
  }
}