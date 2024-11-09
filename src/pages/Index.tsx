import StoryList from "@/components/StoryList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hacker News</h1>
          <p className="text-lg text-gray-600">Today's Top 100 Stories</p>
        </header>
        <main>
          <StoryList />
        </main>
      </div>
    </div>
  );
};

export default Index;