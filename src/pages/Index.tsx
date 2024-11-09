import StoryList from "@/components/StoryList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Index = () => {
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ["topStories"] });
    toast.success("Stories refreshed!");
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 relative">
          <div className="absolute right-0 top-0 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              className="rounded-full"
            >
              <RefreshCw className="h-[1.5rem] w-[1.5rem]" />
              <span className="sr-only">Refresh stories</span>
            </Button>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Hacker News</h1>
          <p className="text-lg text-muted-foreground">Today's Top Stories</p>
        </header>
        <main>
          <StoryList />
        </main>
      </div>
    </div>
  );
};

export default Index;