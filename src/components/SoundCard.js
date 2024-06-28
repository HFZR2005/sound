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
      setTimeout(() => {
        sound.stop(soundId);
      }, 1500);

    } else {
      setSoundId(sound.play());
      sound.fade(0, volume / 100, 1500, soundId);
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="block max-w-sm p-8 bg-white border border-black border-2 rounded-md dark:bg-white hover-shadow-animation active:bg-secondary m-1">
      <div className="flex justify-center pt-8 pb-8">
        {IconComponent && (
          <IconComponent 
            className="text-black cursor-pointer" 
            size={40} 
            onClick={togglePlaySound} 
          />
        )}
      </div>
      <div className="w-16"> 
        {isPlaying ? (
          <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
        ) : (
          <div className="h-3">
          </div>
        )}
      </div>
    </div>
  );
}

export default SoundCard;
