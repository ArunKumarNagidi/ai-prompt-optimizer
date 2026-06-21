// import ScoreCard from "@/components/ScoreCard";
// import CategoryScores from "@/components/CategoryScores";
// import IssuesList from "@/components/IssuesList";
// import SuggestionsList from "@/components/SuggestionsList";
// import OptimizedPrompt from "@/components/OptimizedPrompt";

"use client";

import { useState } from "react";

import PromptForm from "@/components/PromptForm";
import ScoreCard from "@/components/ScoreCard";
import CategoryScores from "@/components/CategoryScores";
import IssuesList from "@/components/IssuesList";
import SuggestionsList from "@/components/SuggestionsList";
import OptimizedPrompt from "@/components/OptimizedPrompt";

import { optimizePrompt } from "@/services/prompt-api";
import { PromptAnalysis } from "@/types/prompt";

export default function HomePage() {
  const [result, setResult] = useState<PromptAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (prompt: string) => {
    try {
      setIsLoading(true);
      setError("");
      setResult(null);

      const response = await optimizePrompt(prompt);

      setResult(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            AI Prompt Optimizer
          </h1>

          <p className="mt-3 text-gray-600">
            Analyze, score, and improve your AI prompts using Gemini.
          </p>
        </div>

        <PromptForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {isLoading && (
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-blue-700">
              Optimizing your prompt...
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-6">

            <ScoreCard
              score={result.overall_score}
            />

            <CategoryScores
              scores={result.category_scores}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <IssuesList
                issues={result.issues}
              />

              <SuggestionsList
                suggestions={result.suggestions}
              />
            </div>

            <OptimizedPrompt
              prompt={result.optimized_prompt}
            />

          </div>
        )}
      </div>
    </main>
  );
}