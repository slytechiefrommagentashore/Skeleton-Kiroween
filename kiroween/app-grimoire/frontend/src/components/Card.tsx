import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-900 bg-opacity-80 border border-purple-700 rounded-lg shadow-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
