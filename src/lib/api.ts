import { useQuery } from "@tanstack/react-query";

interface Story {
  objectID: string;
  title: string;
  url: string;
  points: number;
  author: string;
  created_at: string;
}

export const fetchTopStories = async (): Promise<Story[]> => {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100"
  );
  const data = await response.json();
  return data.hits;
};

export const useTopStories = () => {
  return useQuery({
    queryKey: ["topStories"],
    queryFn: fetchTopStories,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};