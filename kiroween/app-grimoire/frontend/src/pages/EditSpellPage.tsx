import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../lib/api';
import SpellForm from '../components/SpellForm';
import Card from '../components/Card';

interface Spell {
  id: string;
  name: string;
  incantation: string;
  ingredients: string;
  powerLevel: number;
  createdAt: string;
}

export default function EditSpellPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [spell, setSpell] = useState<Spell | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Summon the spell from the depths
    const fetchSpell = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await api.get<Spell>(`/spells/${id}`);
        if (response.success && response.data) {
          setSpell(response.data);
        }
      } catch (err) {
        alert('Failed to summon spell');
        console.error(err);
        navigate('/spells');
      } finally {
        setLoading(false);
      }
    };

    fetchSpell();
  }, [id, navigate]);

  // Transform the spell's properties
  const handleSubmit = async (name: string, incantation: string, ingredients: string, powerLevel: number) => {
    if (!id) return;
    
    try {
      setSaving(true);
      await api.put(`/spells/${id}`, { name, incantation, ingredients, powerLevel });
      navigate('/spells');
    } catch (err) {
      alert('Failed to transform spell');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-purple-300 text-center">🔮 Summoning spell from the depths...</p>
      </div>
    );
  }

  if (!spell) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-400 text-center">Spell lost in the void</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-purple-300 mb-6">✏️ Transform Spell</h2>
      
      <Card>
        <SpellForm
          initialName={spell.name}
          initialIncantation={spell.incantation}
          initialIngredients={spell.ingredients}
          initialPowerLevel={spell.powerLevel}
          onSubmit={handleSubmit}
          onCancel={() => navigate('/spells')}
          submitLabel={saving ? '🔮 Transforming...' : '✨ Save Changes'}
        />
      </Card>
    </div>
  );
}
