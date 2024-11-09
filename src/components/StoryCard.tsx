import { ArrowUpCircle, ExternalLink } from "lucide-react";

interface StoryCardProps {
  title: string;
  url: string;
  points: number;
  author: string;
  createdAt: string;
}

const StoryCard = ({ title, url, points, author, createdAt }: StoryCardProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="story-card bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center min-w-[60px]">
          <ArrowUpCircle className="h-6 w-6 text-hn-orange mb-1" />
          <span className="font-semibold text-gray-700">{points}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              By {author} • {formattedDate}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-hn-orange hover:text-hn-hover transition-colors"
            >
              Read more
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;