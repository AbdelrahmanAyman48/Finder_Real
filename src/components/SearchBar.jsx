import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const SearchBar = ({ value, onChange, className, placeholder = "Search apartments..." }) => {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      />
    </div>
  );
};

export default SearchBar; 