import React from 'react';
import { Building2, LayoutGrid, List } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Header = ({ 
  totalCount,
  filteredCount,
  sortBy,
  onSortChange,
  layout,
  onLayoutChange
}) => {
  return (
    <div className="sticky top-0 z-40 w-full bg-background">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent ml-3">
              Rehab Finder
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-1 items-center justify-end gap-4">
            {/* Property Count */}
            <p className="text-sm font-medium whitespace-nowrap">
              Showing <span className="text-primary font-bold">{filteredCount}</span> of <span className="text-primary font-bold">{totalCount}</span>
            </p>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="rating_desc">Rating: High to Low</SelectItem>
                <SelectItem value="newest">Newest Listings</SelectItem>
              </SelectContent>
            </Select>

            {/* Layout Toggle */}
            <div className="flex items-center border rounded-md">
              <Button 
                variant={layout === 'grid' ? 'default' : 'ghost'} 
                size="sm" 
                className="rounded-none"
                onClick={() => onLayoutChange('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button 
                variant={layout === 'list' ? 'default' : 'ghost'} 
                size="sm"
                className="rounded-none"
                onClick={() => onLayoutChange('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
