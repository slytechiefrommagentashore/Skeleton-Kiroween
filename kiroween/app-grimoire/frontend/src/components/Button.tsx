import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/50',
    secondary: 'bg-gray-700 text-gray-200 hover:bg-gray-600 border border-purple-700',
    danger: 'bg-red-700 text-white hover:bg-red-800 shadow-lg shadow-red-500/50',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
