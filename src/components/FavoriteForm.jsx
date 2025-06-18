import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useNavigate } from 'react-router-dom';

const FavoriteForm = ({ isOpen, onClose, apartment, onToggleFavorite, isFavorite }) => {
  const [listName, setListName] = useState('');
  const [existingLists, setExistingLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load existing favorite lists from localStorage
    const savedLists = localStorage.getItem('favoriteLists');
    if (savedLists) {
      setExistingLists(JSON.parse(savedLists));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isFavorite) {
      // Remove from all lists
      const updatedLists = existingLists.map(list => ({
        ...list,
        apartments: list.apartments.filter(apt => apt.id !== apartment.id)
      })).filter(list => list.apartments.length > 0); // Remove empty lists

      localStorage.setItem('favoriteLists', JSON.stringify(updatedLists));
      onToggleFavorite(apartment);
      navigate('/favorites');
      onClose();
      return;
    }

    // If no list name is provided, use the first existing list
    const targetListName = listName || (existingLists[0]?.name || '');
    
    // Find the existing list or create a new one
    const updatedLists = existingLists.map(list => {
      if (list.name === targetListName) {
        // Add the apartment to the existing list if it's not already there
        const apartmentExists = list.apartments.some(apt => apt.id === apartment.id);
        if (!apartmentExists) {
          return {
            ...list,
            apartments: [...list.apartments, apartment]
          };
        }
        return list;
      }
      return list;
    });

    // If no existing list was found, create a new one
    if (!existingLists.some(list => list.name === targetListName)) {
      updatedLists.push({
        name: targetListName,
        apartments: [apartment]
      });
    }

    // Save the updated lists
    localStorage.setItem('favoriteLists', JSON.stringify(updatedLists));
    
    // Toggle favorite and navigate to the list
    onToggleFavorite(apartment);
    navigate(`/favorites/${targetListName}`);
    onClose();
  };

  const handleExistingListClick = (listName) => {
    if (isFavorite) {
      // If removing, just submit the form
      handleSubmit({ preventDefault: () => {} });
    } else {
      // If adding, set the list name and submit
      setListName(listName);
      handleSubmit({ preventDefault: () => {} });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</DialogTitle>
        </DialogHeader>
        
        {!isFavorite && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="listName">List Name</Label>
              <Input
                id="listName"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                placeholder="Enter a name for your favorite list"
              />
            </div>

            {existingLists.length > 0 && (
              <div className="space-y-2">
                <Label>Existing Lists</Label>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {existingLists.map((list, index) => (
                    <div
                      key={index}
                      className="p-2 bg-secondary/20 rounded-md cursor-pointer hover:bg-secondary/30"
                      onClick={() => handleExistingListClick(list.name)}
                    >
                      {list.name} ({list.apartments.length} items)
                    </div>
                  ))}
                </div>
              </div>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                Add to Favorites
              </Button>
            </DialogFooter>
          </form>
        )}

        {isFavorite && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Are you sure you want to remove this apartment from all your favorite lists?
            </p>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                type="button" 
                variant="destructive"
                onClick={() => handleSubmit({ preventDefault: () => {} })}
              >
                Remove from Favorites
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FavoriteForm; 