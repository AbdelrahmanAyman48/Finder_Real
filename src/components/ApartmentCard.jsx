import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { MapPin, BedDouble, Bath, Square, Star, Hash, Heart, Crown, CheckCircle2, XCircle } from 'lucide-react';
import ImageGallery from './ImageGallery';
import FavoriteForm from './FavoriteForm';
import PremiumToggle from './PremiumToggle';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="focus:outline-none"
        >
          <Star
            className={`h-4 w-4 transition-colors ${
              star <= (hoverRating || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const ApartmentCard = ({ apartment, layout = 'grid', onToggleFavorite, isFavorite, onTogglePremium }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [state, setState] = useState(apartment.state || 'Available');
  const [rating, setRating] = useState(apartment.rating || 0);
  const {
    id,
    title,
    price,
    address,
    bedrooms,
    bathrooms,
    area,
    type,
    contact,
    amenities = [],
    images = [],
    isPremium = false,
  } = apartment;

  // Validation functions
  const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);
  const isValidString = (value) => typeof value === 'string' && value.trim() !== '';
  
  // Format values with validation
  const displayPrice = isValidNumber(price) ? price.toLocaleString() : null;
  const displayTitle = isValidString(title) ? title : null;
  const displayAddress = isValidString(address) ? address : null;
  const displayBedrooms = isValidNumber(bedrooms) ? bedrooms : null;
  const displayBathrooms = isValidNumber(bathrooms) ? bathrooms : null;
  const displayArea = isValidNumber(area) ? area : null;
  const displayType = isValidString(type) ? type : null;
  const displayContact = isValidString(contact) ? contact : null;

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFormOpen(true);
  };

  const handlePremiumToggle = (newPremiumStatus) => {
    onTogglePremium(id, newPremiumStatus);
  };

  const handleStateToggle = () => {
    setState(prevState => prevState === 'Available' ? 'Rented' : 'Available');
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Here you would typically also update the rating in your backend
    console.log(`Rating changed to ${newRating} for apartment ${id}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  if (layout === 'list') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
      >
        <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${isPremium ? 'border-2 border-yellow-400 shadow-lg' : ''}`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="h-[350px]">
                <ImageGallery images={images} />
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-2 z-10">
                <PremiumToggle isPremium={isPremium} onToggle={handlePremiumToggle} />
                <div className="bg-black/30 rounded-full p-1">
                  <StarRating rating={rating} onRatingChange={handleRatingChange} />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${isFavorite ? 'text-red-500' : 'text-white'} bg-black/30 hover:bg-black/50`}
                  onClick={handleFavoriteClick}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      {displayTitle && <CardTitle className="text-xl">{displayTitle}</CardTitle>}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Hash className="h-3 w-3" />
                        <span>ID: {id}</span>
                      </div>
                    </div>
                    {displayPrice && <p className="text-xl font-bold text-primary">EGP {displayPrice}/mo</p>}
                  </div>
                  {displayAddress && (
                    <CardDescription className="flex items-center gap-1 mb-4">
                      <MapPin className="h-4 w-4" /> {displayAddress}
                    </CardDescription>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {displayBedrooms && (
                      <div className="flex items-center gap-2">
                        <BedDouble className="h-4 w-4" />
                        <span>{displayBedrooms} Beds</span>
                      </div>
                    )}
                    {displayBathrooms && (
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4" />
                        <span>{displayBathrooms} Baths</span>
                      </div>
                    )}
                    {displayArea && (
                      <div className="flex items-center gap-2">
                        <Square className="h-4 w-4" />
                        <span>{displayArea} sqft</span>
                      </div>
                    )}
                    <div className="flex gap-2">
                    {displayType && <Badge variant="outline">{displayType}</Badge>}
                      {displayContact && <Badge variant="outline">{displayContact}</Badge>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex items-center gap-1 ${
                        state === 'Available' 
                          ? 'bg-green-500 text-white hover:bg-green-600 hover:text-white border-green-500' 
                          : 'bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 border-red-200'
                      }`}
                      onClick={handleStateToggle}
                    >
                      {state === 'Available' ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Available
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4" />
                          Rented
                        </>
                      )}
                    </Button>
                  </div>
                  {amenities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {amenities.slice(0, 3).map((amenity, index) => (
                        <Badge key={index} variant="secondary">{amenity}</Badge>
                      ))}
                      {amenities.length > 3 && (
                        <Badge variant="secondary">+{amenities.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </div>
                <Button className="w-full md:w-auto">01554664328</Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
      >
        <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${isPremium ? 'border-2 border-yellow-400 shadow-lg' : ''}`}>
          <div className="relative">
            <div className="h-[350px]">
              <ImageGallery images={images} />
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-2 z-10">
              <PremiumToggle isPremium={isPremium} onToggle={handlePremiumToggle} />
              <div className="bg-black/30 rounded-full p-1">
                <StarRating rating={rating} onRatingChange={handleRatingChange} />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${isFavorite ? 'text-red-500' : 'text-white'} bg-black/30 hover:bg-black/50`}
                onClick={handleFavoriteClick}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                {displayTitle && <h3 className="font-semibold text-lg leading-tight">{displayTitle}</h3>}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Hash className="h-3 w-3" />
                  <span>ID: {id}</span>
                </div>
                {displayAddress && (
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {displayAddress}
                  </p>
                )}
              </div>
              {displayPrice && <p className="text-lg font-bold text-primary whitespace-nowrap">EGP {displayPrice}</p>}
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-sm mb-3">
              {displayBedrooms && (
                <div className="flex items-center gap-1">
                  <BedDouble className="h-3 w-3" />
                  <span>{displayBedrooms} Beds</span>
                </div>
              )}
              {displayBathrooms && (
                <div className="flex items-center gap-1">
                  <Bath className="h-3 w-3" />
                  <span>{displayBathrooms} Baths</span>
                </div>
              )}
              {displayArea && (
                <div className="flex items-center gap-1">
                  <Square className="h-3 w-3" />
                  <span>{displayArea} sqft</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between mb-3">
              {amenities.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {amenities.slice(0, 2).map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{amenity}</Badge>
                  ))}
                  {amenities.length > 2 && (
                    <Badge variant="secondary" className="text-xs">+{amenities.length - 2} more</Badge>
                  )}
                </div>
              )}
              <div className="flex gap-2">
              {displayType && <Badge variant="outline" className="text-xs">{displayType}</Badge>}
                {displayContact && <Badge variant="outline" className="text-xs">{displayContact}</Badge>}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-1 ${
                  state === 'Available' 
                    ? 'bg-green-500 text-white hover:bg-green-600 hover:text-white border-green-500' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 border-red-200'
                }`}
                onClick={handleStateToggle}
              >
                {state === 'Available' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Available
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4" />
                    Rented
                  </>
                )}
              </Button>
            </div>
            
            <Button className="w-full" size="sm">01554664328</Button>
          </div>
        </Card>
      </motion.div>

      <FavoriteForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        apartment={apartment}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default ApartmentCard;
