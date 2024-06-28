// src/components/VolumeControl.js
import React, { useEffect, useRef } from 'react';

function VolumeControl({ volume, onVolumeChange }) {
  const rangeRef = useRef(null);

  useEffect(() => {
    const range = rangeRef.current;
    const percentage = (volume / 100) * 100;
    range.style.background = `linear-gradient(to right, black ${percentage}%, white ${percentage}%)`;
  }, [volume]);

  return (
    <div className="flex items-center w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={onVolumeChange}
        ref={rangeRef}
        className="w-full h-2 bg-gray-200 border-black border-2 rounded-full appearance-none"
      />
    </div>
  );
}

export default VolumeControl;
