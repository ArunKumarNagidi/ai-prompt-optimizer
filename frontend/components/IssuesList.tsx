// src/components/IssuesList.tsx

interface IssuesListProps {
    issues: string[];
  }
  
  export default function IssuesList({
    issues,
  }: IssuesListProps) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
            <span className="text-red-600">⚠️</span>
          </div>
  
          <h2 className="text-xl font-semibold text-gray-900">
            Issues Found
          </h2>
        </div>
  
        {issues.length === 0 ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-medium text-green-700">
              🎉 No issues detected. Your prompt looks great!
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {issues.map((issue, index) => (
              <li
                key={`${issue}-${index}`}
                className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
              >
                <span className="mt-0.5 text-red-600">✖</span>
  
                <p className="text-sm leading-relaxed text-gray-700">
                  {issue}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }