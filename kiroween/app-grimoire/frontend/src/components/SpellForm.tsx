import { useState, FormEvent } from 'react';
import Input from './Input';
import Button from './Button';

interface SpellFormProps {
  initialName?: string;
  initialIncantation?: string;
  initialIngredients?: string;
  initialPowerLevel?: number;
  onSubmit: (name: string, incantation: string, ingredients: string, powerLevel: number) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function SpellForm({
  initialName = '',
  initialIncantation = '',
  initialIngredients = '',
  initialPowerLevel = 5,
  onSubmit,
  onCancel,
  submitLabel = '✨ Cast Spell',
}: SpellFormProps) {
  const [name, setName] = useState(initialName);
  const [incantation, setIncantation] = useState(initialIncantation);
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [powerLevel, setPowerLevel] = useState(initialPowerLevel);
  const [errors, setErrors] = useState<{ 
    name?: string; 
    incantation?: string; 
    ingredients?: string;
    powerLevel?: string;
  }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Perform mystical verification
    const newErrors: typeof errors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Spell name is required';
    }
    
    if (!incantation.trim()) {
      newErrors.incantation = 'Incantation is required';
    }
    
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }

    if (powerLevel < 1 || powerLevel > 10) {
      newErrors.powerLevel = 'Power level must be between 1 and 10';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onSubmit(name, incantation, ingredients, powerLevel);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="🔮 Spell Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        placeholder="Enter mystical spell name"
      />
      
      <div>
        <label className="block text-sm font-medium text-purple-300 mb-1">
          📜 Incantation
        </label>
        <textarea
          value={incantation}
          onChange={(e) => setIncantation(e.target.value)}
          className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px] ${
            errors.incantation ? 'border-red-500' : 'border-purple-700'
          }`}
          placeholder="Enter the words of power..."
        />
        {errors.incantation && (
          <p className="mt-1 text-sm text-red-400">{errors.incantation}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-300 mb-1">
          🧪 Ingredients
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full px-3 py-2 bg-gray-800 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] ${
            errors.ingredients ? 'border-red-500' : 'border-purple-700'
          }`}
          placeholder="List required magical components..."
        />
        {errors.ingredients && (
          <p className="mt-1 text-sm text-red-400">{errors.ingredients}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-300 mb-1">
          ⚡ Power Level: {powerLevel} {'⭐'.repeat(powerLevel)}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={powerLevel}
          onChange={(e) => setPowerLevel(Number(e.target.value))}
          className="w-full h-2 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        {errors.powerLevel && (
          <p className="mt-1 text-sm text-red-400">{errors.powerLevel}</p>
        )}
      </div>
      
      <div className="flex gap-2 pt-4">
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          🚫 Cancel
        </Button>
      </div>
    </form>
  );
}
