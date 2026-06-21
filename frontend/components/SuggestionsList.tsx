interface SuggestionsListProps {
    suggestions: string[];
  }
  
  export default function SuggestionsList({
    suggestions,
  }: SuggestionsListProps) {
    return (
      <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
            <span className="text-green-600">💡</span>
          </div>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Suggestions
          </h2>
        </div>
  
        {suggestions.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-600">
              No suggestions available.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <li
                key={`${suggestion}-${index}`}
                className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50 p-4"
              >
                <span className="mt-0.5 text-green-600">✓</span>
  
                <p className="text-sm leading-relaxed text-gray-700">
                  {suggestion}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }