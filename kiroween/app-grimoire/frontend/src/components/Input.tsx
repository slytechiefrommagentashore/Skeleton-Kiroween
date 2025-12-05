import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-purple-300 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            error ? 'border-red-500' : 'border-purple-700'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
