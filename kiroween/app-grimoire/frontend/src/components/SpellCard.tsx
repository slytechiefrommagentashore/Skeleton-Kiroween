import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';

interface Spell {
  id: string;
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
  createdAt: string;
}

interface SpellCardProps {
  spell: Spell;
  onDelete: (id: string) => void;
}

export default function SpellCard({ spell, onDelete }: SpellCardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Generate power level stars
  const powerStars = '⭐'.repeat(spell.powerLevel);

  return (
    <Card>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-purple-300">
          🔮 {spell.name}
        </h3>
        <span className="text-sm text-yellow-400" title={`Power Level: ${spell.powerLevel}`}>
          {powerStars}
        </span>
      </div>
      
      <div className="mb-3">
        <p className="text-sm text-purple-400 font-semibold mb-1">Incantation:</p>
        <p className="text-gray-300 italic line-clamp-2">"{spell.incantation}"</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-purple-400 font-semibold mb-1">Ingredients:</p>
        <p className="text-gray-400 text-sm line-clamp-2">{spell.ingredients}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-purple-700">
        <span className="text-xs text-gray-500">
          Inscribed: {formatDate(spell.createdAt)}
        </span>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => navigate(`/spells/${spell.id}/edit`)}
          >
            ✏️ Transform
          </Button>
          <Button
            variant="danger"
            onClick={() => onDelete(spell.id)}
          >
            💀 Banish
          </Button>
        </div>
      </div>
    </Card>
  );
}
