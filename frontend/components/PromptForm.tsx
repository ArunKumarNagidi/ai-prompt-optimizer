"use client";

import { useState, FormEvent } from "react";

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const MAX_CHARACTERS = 5000;

export default function PromptForm({
  onSubmit,
  isLoading,
}: PromptFormProps) {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      setError("Please enter a prompt.");
      return;
    }

    setError("");
    onSubmit(trimmedPrompt);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4">
        <label
          htmlFor="prompt"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Enter Your Prompt
        </label>

        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);

            if (error) {
              setError("");
            }
          }}
          placeholder="Example: Write a blog about artificial intelligence for beginners..."
          maxLength={MAX_CHARACTERS}
          rows={10}
          disabled={isLoading}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span
          className={`text-sm ${
            prompt.length > MAX_CHARACTERS * 0.9
              ? "text-orange-600"
              : "text-gray-500"
          }`}
        >
          {prompt.length}/{MAX_CHARACTERS}
        </span>

        {error && (
          <span className="text-sm font-medium text-red-600">{error}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isLoading ? "Optimizing..." : "Optimize Prompt"}
      </button>
    </form>
  );
}