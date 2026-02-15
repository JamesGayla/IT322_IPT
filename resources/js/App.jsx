import React, { useState } from 'react';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';
import Card from './components/Card';

export default function App() {
  const [toggleStates, setToggleStates] = useState({
    feature1: false,
    feature2: false,
  });

  const [count, setCount] = useState(0);

  const handleToggleChange = (feature, state) => {
    setToggleStates(prev => ({
      ...prev,
      [feature]: state
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Laboratory Activity No. 2
          </h1>
          <p className="text-xl text-gray-600">
            Frontend Project Setup with Reusable Components
          </p>
        </div>

        {/* Grid Layout with Flexbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - Button Examples */}
          <Card 
            title="Buttons" 
            description="Reusable button component with multiple variants"
            variant="primary"
          >
            <div className="flex flex-col gap-3">
              <Button label="Primary Button" variant="primary" />
              <Button label="Secondary" variant="secondary" size="sm" />
              <Button label="Success" variant="success" />
              <Button label="Danger" variant="danger" size="lg" />
            </div>
          </Card>

          {/* Card 2 - Toggle Switches */}
          <Card 
            title="Interactive Toggles" 
            description="Toggle switches with state management"
            variant="highlight"
          >
            <div className="flex flex-col gap-4">
              <ToggleSwitch 
                label="Feature 1"
                initialState={toggleStates.feature1}
                onChange={(state) => handleToggleChange('feature1', state)}
              />
              <ToggleSwitch 
                label="Feature 2"
                initialState={toggleStates.feature2}
                onChange={(state) => handleToggleChange('feature2', state)}
              />
            </div>
          </Card>

          {/* Card 3 - Counter */}
          <Card 
            title="Counter" 
            description="Interactive UI behavior example"
            variant="default"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl font-bold text-blue-600">
                {count}
              </div>
              <div className="flex gap-3">
                <Button 
                  label="−" 
                  onClick={() => setCount(count - 1)}
                  variant="danger"
                  size="sm"
                />
                <Button 
                  label="+" 
                  onClick={() => setCount(count + 1)}
                  variant="success"
                  size="sm"
                />
              </div>
              <Button 
                label="Reset" 
                onClick={() => setCount(0)}
                variant="secondary"
                size="sm"
              />
            </div>
          </Card>
        </div>

        {/* Status Display */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Current State
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600"><strong>Feature 1:</strong> {toggleStates.feature1 ? '✓ Enabled' : '✗ Disabled'}</p>
              <p className="text-gray-600"><strong>Feature 2:</strong> {toggleStates.feature2 ? '✓ Enabled' : '✗ Disabled'}</p>
            </div>
            <div>
              <p className="text-gray-600"><strong>Counter Value:</strong> {count}</p>
              <p className="text-gray-600"><strong>Components Created:</strong> 3 (Button, ToggleSwitch, Card)</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p>✅ Reusable Components • ✅ Flexbox/Grid Layout • ✅ Interactive Behavior</p>
        </div>
      </div>
    </div>
  );
}
