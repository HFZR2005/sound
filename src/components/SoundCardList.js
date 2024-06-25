// src/components/SoundCardList.js
import React, { useState, useEffect } from 'react';
import soundCardData from '../services/sounds.json';
import SoundCard from './SoundCard';
import { FaMusic, FaHeadphones, FaMicrophone } from 'react-icons/fa';

const iconMap = {
  FaMusic: FaMusic,
  FaHeadphones: FaHeadphones,
  FaMicrophone: FaMicrophone
};

const SoundCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(soundCardData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map(card => {
        const IconComponent = iconMap[card.iconName];
        return (
          <SoundCard IconComponent={IconComponent} />
        );
      })}
    </div>
  );
};

export default SoundCardList;
