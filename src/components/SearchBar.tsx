
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div 
      className={`
        relative max-w-xl mx-auto transition-all duration-300
        ${focused ? 'scale-105' : 'scale-100'}
      `}
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Search AI agents..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
