import StoryList from "@/components/StoryList";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 relative">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Hacker News</h1>
          <p className="text-lg text-muted-foreground">Today's Top 100 Stories</p>
        </header>
        <main>
          <StoryList />
        </main>
      </div>
    </div>
  );
};

export default Index;