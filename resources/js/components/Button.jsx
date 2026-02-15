import React from 'react';

export default function Button({ 
  label, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
