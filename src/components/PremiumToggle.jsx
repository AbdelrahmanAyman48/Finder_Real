import React from 'react';
import { Crown } from 'lucide-react';
import { Button } from './ui/button';

const PremiumToggle = ({ isPremium, onToggle }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle(!isPremium);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full ${isPremium ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-black/30 hover:bg-black/50'}`}
      onClick={handleClick}
    >
      <Crown className={`h-5 w-5 ${isPremium ? 'fill-current text-black' : 'text-white'}`} />
    </Button>
  );
};

export default PremiumToggle; 