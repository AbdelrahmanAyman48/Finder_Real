import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ApartmentCard from '../components/ApartmentCard';

const FavoritesPage = () => {
  const { listName } = useParams();
  const { favorites, toggleFavorite } = useFavorites();
  const [namedLists, setNamedLists] = useState([]);
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    // Load named lists from localStorage
    const savedLists = localStorage.getItem('favoriteLists');
    if (savedLists) {
      const lists = JSON.parse(savedLists);
      setNamedLists(lists);
      
      // If a list name is provided in the URL, find that list
      if (listName) {
        const list = lists.find(l => l.name === listName);
        setCurrentList(list);
      }
    }
  }, [listName]);

  const displayApartments = currentList ? currentList.apartments : favorites;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {currentList ? `Favorite List: ${currentList.name}` : 'All Favorites'}
      </h1>

      {namedLists.length > 0 && !listName && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Favorite Lists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {namedLists.map((list, index) => (
              <div
                key={index}
                className="p-4 bg-secondary/20 rounded-lg cursor-pointer hover:bg-secondary/30"
                onClick={() => setCurrentList(list)}
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