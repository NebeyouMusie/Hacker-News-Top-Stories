import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="text"
        placeholder="Search stories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 py-6 text-lg bg-white border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-hn-orange focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;