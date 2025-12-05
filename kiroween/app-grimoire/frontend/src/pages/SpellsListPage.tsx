import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import SpellCard from '../components/SpellCard';
import Button from '../components/Button';

interface Spell {
  id: string;
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
  createdAt: string;
}

export default function SpellsListPage() {
  const navigate = useNavigate();
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Summon all spells from the grimoire
  const fetchSpells = async () => {
    try {
      setLoading(true);
      const response = await api.get<Spell[]>('/spells');
      if (response.success && response.data) {
        setSpells(response.data);
      }
    } catch (err) {
      setError('Failed to summon spells from the depths');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpells();
  }, []);

  // Banish a spell from existence
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to banish this spell from the grimoire?')) {
      return;
    }

    try {
      await api.delete(`/spells/${id}`);
      setSpells(spells.filter(spell => spell.id !== id));
    } catch (err) {
      alert('Failed to banish spell');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-purple-300 text-center">🔮 Summoning spells from the depths...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-400 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-300">📖 My Grimoire</h2>
        <Button onClick={() => navigate('/spells/create')}>
          ✨ Inscribe New Spell
        </Button>
      </div>

      {spells.length === 0 ? (
        <div className="text-center py-12 bg-black bg-opacity-30 rounded-lg border border-purple-700">
          <p className="text-purple-300 mb-4 text-lg">👻 Your grimoire is empty...</p>
          <p className="text-gray-400 mb-6">Begin your mystical journey by inscribing your first spell</p>
          <Button onClick={() => navigate('/spells/create')}>
            🔮 Cast Your First Spell
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {spells.map(spell => (
            <SpellCard
              key={spell.id}
              spell={spell}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
