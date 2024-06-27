// src/components/SoundCardList.js
import React, { useState, useEffect } from 'react';
import soundCardData from '../services/sounds.json';
import SoundCard from './SoundCard';
import { IoRainyOutline, IoThunderstormOutline, IoTrainOutline } from "react-icons/io5";


const iconMap = {
  rain: IoRainyOutline,
  thunder: IoThunderstormOutline ,
  train: IoTrainOutline,
};

const SoundCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(soundCardData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map(card => {
        const soundName = card.name;
        const IconComponent = iconMap[soundName];
        return (
          <SoundCard soundName={soundName} IconComponent={IconComponent} />
        );
      })}
    </div>
  );
};

export default SoundCardList;
