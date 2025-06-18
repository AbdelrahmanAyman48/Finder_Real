import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ApartmentCard from '../components/ApartmentCard';
import { Button } from '../components/ui/button';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const FavoritesPage = () => {
  const { listName } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const [namedLists, setNamedLists] = useState([]);
  const [currentList, setCurrentList] = useState(null);
  const [listNotFound, setListNotFound] = useState(false);

  useEffect(() => {
    // Load named lists from localStorage
    const savedLists = localStorage.getItem('favoriteLists');
    if (savedLists) {
      const lists = JSON.parse(savedLists);
      setNamedLists(lists);
      
      // If a list name is provided in the URL, find that list
      if (listName) {
        const list = lists.find(l => l.name === listName);
        if (list) {
          setCurrentList(list);
          setListNotFound(false);
        } else {
          setListNotFound(true);
          setCurrentList(null);
        }
      }
    } else if (listName) {
      // No saved lists but URL has a list name
      setListNotFound(true);
    }
  }, [listName]);

  const displayApartments = currentList ? currentList.apartments : favorites;

  // Handle list not found
  if (listNotFound) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">List Not Found</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The favorites list "{listName}" could not be found.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate('/favorites')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Favorites
            </Button>
            <Button variant="outline" onClick={() => navigate('/')}>
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        {listName && (
          <Button variant="outline" onClick={() => navigate('/favorites')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Lists
          </Button>
        )}
        <h1 className="text-3xl font-bold">
          {currentList ? `Favorite List: ${currentList.name}` : 'All Favorites'}
        </h1>
      </div>

      {namedLists.length > 0 && !listName && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Favorite Lists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {namedLists.map((list, index) => (
              <div
                key={index}
                className="p-4 bg-secondary/20 rounded-lg cursor-pointer hover:bg-secondary/30 transition-colors"
                onClick={() => navigate(`/favorites/${encodeURIComponent(list.name)}`)}
              >
                <h3 className="font-medium">{list.name}</h3>
                <p className="text-sm text-muted-foreground">{list.apartments.length} apartments</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {displayApartments.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No favorite apartments yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Click the heart icon on any apartment to add it to your favorites.</p>
          <Button className="mt-4" onClick={() => navigate('/')}>
            Browse Apartments
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayApartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              onToggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage; 