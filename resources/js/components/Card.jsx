import React from 'react';

export default function Card({ 
  title, 
  description, 
  children,
  variant = 'default',
  className = '' 
}) {
  const variantStyles = {
    default: 'border border-gray-200 bg-white',
    primary: 'border-2 border-blue-500 bg-blue-50',
    highlight: 'border border-yellow-300 bg-yellow-50',
  };

  return (
    <div className={`rounded-lg p-6 shadow-md transition-all duration-200 hover:shadow-lg ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}
