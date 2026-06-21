"use client";

import { useState } from "react";

interface OptimizedPromptProps {
  prompt: string;
}

export default function OptimizedPrompt({
  prompt,
}: OptimizedPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Optimized Prompt
        </h2>

        <button
          onClick={handleCopy}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
          {prompt}
        </p>
      </div>
    </div>
  );
}