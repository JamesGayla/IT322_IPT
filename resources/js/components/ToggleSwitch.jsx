import React, { useState } from 'react';

export default function ToggleSwitch({ 
  label = 'Toggle Switch',
  initialState = false,
  onChange 
}) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) onChange(!isOn);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <span className="text-gray-700 font-medium">{label}</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
            isOn ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-semibold ${isOn ? 'text-green-600' : 'text-gray-500'}`}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}
