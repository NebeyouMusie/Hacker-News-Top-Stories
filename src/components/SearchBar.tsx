import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ["topStories"] });
    toast.success("Stories refreshed!");
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8 flex gap-2 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Search stories..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 py-6 text-lg bg-background border-input rounded-xl shadow-sm focus:ring-2 focus:ring-hn-orange focus:border-transparent"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleRefresh}
        className="h-12 w-12 rounded-full"
      >
        <RefreshCw className="h-[1.5rem] w-[1.5rem]" />
        <span className="sr-only">Refresh stories</span>
      </Button>
    </div>
  );
};

export default SearchBar;