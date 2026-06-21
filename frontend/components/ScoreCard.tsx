// src/components/ScoreCard.tsx

interface ScoreCardProps {
    score: number;
  }
  
  export default function ScoreCard({ score }: ScoreCardProps) {
    const getScoreColor = () => {
      if (score < 40) {
        return {
          text: "text-red-600",
          bg: "bg-red-50",
          border: "border-red-200",
          label: "Needs Improvement",
        };
      }
  
      if (score < 70) {
        return {
          text: "text-yellow-600",
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          label: "Average",
        };
      }
  
      return {
        text: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        label: "Excellent",
      };
    };
  
    const colors = getScoreColor();
  
    return (
      <div
        className={`w-full rounded-2xl border ${colors.border} ${colors.bg} p-6 shadow-sm`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-600">
            Prompt Score
          </p>
  
          <div className="flex items-end">
            <span className={`text-6xl font-bold ${colors.text}`}>
              {score}
            </span>
  
            <span className="mb-2 ml-1 text-lg text-gray-500">
              /100
            </span>
          </div>
  
          <p className={`mt-3 text-sm font-semibold ${colors.text}`}>
            {colors.label}
          </p>
        </div>
      </div>
    );
  }