interface CategoryScoresProps {
    scores: {
      clarity: number;
      context: number;
      specificity: number;
      constraints: number;
      output_format: number;
      creativity: number;
    };
  }
  
  export default function CategoryScores({
    scores,
  }: CategoryScoresProps) {
    const categories = [
      { label: "Clarity", value: scores.clarity },
      { label: "Context", value: scores.context },
      { label: "Specificity", value: scores.specificity },
      { label: "Constraints", value: scores.constraints },
      { label: "Output Format", value: scores.output_format },
      { label: "Creativity", value: scores.creativity },
    ];
  
    const getBarColor = (score: number) => {
      if (score < 40) return "bg-red-500";
      if (score < 70) return "bg-yellow-500";
      return "bg-green-500";
    };
  
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Category Scores
        </h2>
  
        <div className="space-y-5">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {category.label}
                </span>
  
                <span className="text-sm font-semibold text-gray-900">
                  {category.value}/100
                </span>
              </div>
  
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getBarColor(
                    category.value
                  )}`}
                  style={{
                    width: `${category.value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }