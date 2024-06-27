// src/components/VolumeControl.js
import React from 'react';

function VolumeControl({ volume, onVolumeChange }) {
  return (
    <div className="flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={onVolumeChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}

export default VolumeControl;
