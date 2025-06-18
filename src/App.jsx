import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import ApartmentCard from './components/ApartmentCard';
import SearchBar from './components/SearchBar';
import { mockApartments } from './data/mockApartments';
import { Toaster } from './components/ui/toaster';
import { useToast } from './components/ui/use-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider, useFavorites } from './context/FavoritesContext';
import FavoritesPage from './pages/FavoritesPage';
import { Button } from './components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';
import { Badge } from './components/ui/badge';
import { X, Filter, Home, BedDouble, Bath, DollarSign } from 'lucide-react';
import { filterOptions } from './data/mockApartments';

function MainContent() {
  const [apartments, setApartments] = useState([]);
  const [layout, setLayout] = useState('grid');
  const [sortBy, setSortBy] = useState('price_asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    minPrice: 0,
    maxPrice: 500000,
    bedrooms: '',
    bathrooms: '',
    amenities: []
  });
  const { toast } = useToast();
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    try {
      // Ensure mockApartments is an array
      if (Array.isArray(mockApartments)) {
        console.log('Loading mock apartments:', mockApartments.length);
        setApartments(mockApartments);
      } else {
        throw new Error('mockApartments is not an array');
      }
    } catch (error) {
      console.error('Error loading apartments:', error);
      toast({
        title: "Error",
        description: "Failed to load apartments. Please try again later.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleTogglePremium = (id, newPremiumStatus) => {
    setApartments(prevApartments =>
      prevApartments.map(apartment =>
        apartment.id === id
          ? { ...apartment, isPremium: newPremiumStatus }
          : apartment
      )
    );
  };

  // Filter apartments based on search query and filters
  const filteredApartments = React.useMemo(() => {
    let filtered = apartments;

    // Apply search query filter
    if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((apartment) => {
      const searchableFields = [
        apartment.title,
        apartment.address,
        apartment.type,
        apartment.id,
        apartment.price?.toString(),
        apartment.bedrooms?.toString(),
        apartment.bathrooms?.toString(),
        apartment.area?.toString(),
        ...(apartment.amenities || [])
        ].filter(Boolean);

      return searchableFields.some(field => 
        field.toLowerCase().includes(query)
      );
    });
    }

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter(apartment => apartment.type === filters.type);
    }

    // Apply price range filter
    filtered = filtered.filter(apartment => 
      apartment.price >= filters.minPrice && apartment.price <= filters.maxPrice
    );

    // Apply bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(apartment => apartment.bedrooms === parseInt(filters.bedrooms));
    }

    // Apply bathrooms filter
    if (filters.bathrooms) {
      filtered = filtered.filter(apartment => apartment.bathrooms === parseFloat(filters.bathrooms));
    }

    // Apply amenities filter
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(apartment => 
        filters.amenities.every(amenity => 
          apartment.amenities?.includes(amenity)
        )
      );
    }

    return filtered;
  }, [apartments, searchQuery, filters]);

  // Sort apartments based on the selected sort option
  const sortedApartments = React.useMemo(() => {
    const sorted = [...filteredApartments];
    switch (sortBy) {
      case 'price_asc':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price_desc':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'rating_desc':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.availabilityDate || 0);
          const dateB = new Date(b.availabilityDate || 0);
          return dateB - dateA;
        });
      default:
        return sorted;
    }
  }, [filteredApartments, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      minPrice: 0,
      maxPrice: 500000,
      bedrooms: '',
      bathrooms: '',
      amenities: []
    });
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    Array.isArray(value) ? value.length > 0 : value !== '' && value !== 0
  ).length;

  // Show loading state
  if (!apartments || apartments.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-2">Loading apartments...</p>
          <p className="text-sm text-muted-foreground">Please wait while we fetch the data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        totalCount={apartments.length}
        filteredCount={sortedApartments.length}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        layout={layout}
        onLayoutChange={setLayout}
      />

      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by title, address, price, amenities..."
          />
        </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 whitespace-nowrap"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
                
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={clearFilters}
                  >
                    <X className="h-4 w-4" />
                    Clear all
                  </Button>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Property Type
                      </label>
                      <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.types.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Price Range
                      </label>
                      <div className="px-2">
                        <Slider
                          defaultValue={[filters.minPrice, filters.maxPrice]}
                          max={500000}
                          step={1000}
                          onValueChange={([min, max]) => {
                            handleFilterChange('minPrice', min);
                            handleFilterChange('maxPrice', max);
                          }}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                          <span>EGP {filters.minPrice.toLocaleString()}</span>
                          <span>EGP {filters.maxPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <BedDouble className="h-4 w-4" />
                        Bedrooms
                      </label>
                      <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange('bedrooms', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.bedrooms.map((bed) => (
                            <SelectItem key={bed} value={bed.toString()}>
                              {bed === 0 ? 'Studio' : `${bed} Bedroom${bed > 1 ? 's' : ''}`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Bath className="h-4 w-4" />
                        Bathrooms
                      </label>
                      <Select value={filters.bathrooms} onValueChange={(value) => handleFilterChange('bathrooms', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bathrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterOptions.bathrooms.map((bath) => (
                            <SelectItem key={bath} value={bath.toString()}>
                              {bath} Bathroom{bath > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 pb-4">
                    <label className="text-sm font-medium">Amenities</label>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.amenities.map((amenity) => (
                        <Badge
                          key={amenity}
                          variant={filters.amenities.includes(amenity) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleAmenityToggle(amenity)}
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-6 px-4">
        {/* Results count */}
        {(searchQuery || activeFiltersCount > 0) && (
          <p className="text-sm text-muted-foreground mb-4">
            Found {sortedApartments.length} results
            {searchQuery && ` for "${searchQuery}"`}
            {activeFiltersCount > 0 && ` with ${activeFiltersCount} active filter${activeFiltersCount > 1 ? 's' : ''}`}
          </p>
        )}

        <div className={`grid gap-6 ${
          layout === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-5xl mx-auto'
        }`}>
          {sortedApartments.map((apartment) => (
            <ApartmentCard 
              key={apartment.id} 
              apartment={apartment} 
              layout={layout}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite(apartment.id)}
              onTogglePremium={handleTogglePremium}
            />
          ))}
        </div>

        {/* No results message */}
        {sortedApartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No apartments found
              {searchQuery && ` matching "${searchQuery}"`}
              {activeFiltersCount > 0 && ' with the selected filters'}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>
      <Toaster />
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h1>
            <p className="text-muted-foreground">Please try refreshing the page.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/favorites/:listName" element={<FavoritesPage />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

export default App;
