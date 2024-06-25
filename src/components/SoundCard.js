import React, { useState } from 'react';
import VolumeControl from './VolumeControl';

function SoundCard({ IconComponent }) {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div href="#" className="block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700">
        <div className="flex justify-center pt-8 pb-8">
             {IconComponent && <IconComponent className="text-green-500" size={24} />}
        </div>
      <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
    </div>
  );
}

export default SoundCard;
