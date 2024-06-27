import React, { useState, useEffect } from 'react';
import VolumeControl from './VolumeControl';
import sounds from '../services/sounds.json';
import { Howl } from 'howler';

function SoundCard({ soundName, IconComponent }) {
  const [volume, setVolume] = useState(50);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundId, setSoundId] = useState(null);

  useEffect(() => {
    const soundObj = sounds.find((sound) => sound.name === soundName);

    if (soundObj) {
      console.log(soundObj.soundPath)
      const newSound = new Howl({
        src: [soundObj.soundPath],
        loop: true,
        volume: volume / 100,
      });
      setSound(newSound);
    } else {
      console.error(`Sound ${soundName} not found`);
    }
  }, [soundName]);



  useEffect(() => {
    if (sound) {
      sound.volume(volume / 100);
    }
  }, [volume, sound]);

  const togglePlaySound = () => {
    if (!sound) return;
    if (isPlaying) {
      sound.fade(volume / 100, 0, 1500, soundId);
    } else {
      setSoundId(sound.play());
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="block max-w-sm p-8 bg-white border border-gray-200 rounded-xl shadow hover:bg-green-100 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700">
      <div className="flex justify-center pt-8 pb-8">
        {IconComponent && (
          <IconComponent 
            className="text-green-50 cursor-pointer" 
            size={40} 
            onClick={togglePlaySound} 
          />
        )}
      </div>
      <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
    </div>
  );
}

export default SoundCard;
