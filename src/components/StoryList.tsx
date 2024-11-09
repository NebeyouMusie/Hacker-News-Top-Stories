import { useState } from "react";
import { useTopStories } from "@/lib/api";
import StoryCard from "./StoryCard";
import SkeletonCard from "./SkeletonCard";
import SearchBar from "./SearchBar";

const StoryList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: stories, isLoading } = useTopStories();

  const filteredStories = stories?.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="space-y-4 animate-fade-in">
        {[...Array(10)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <div className="space-y-4">
        {filteredStories?.map((story) => (
          <StoryCard
            key={story.objectID}
            title={story.title}
            url={story.url}
            points={story.points}
            author={story.author}
            createdAt={story.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryList;