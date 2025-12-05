import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import SpellForm from '../components/SpellForm';
import Card from '../components/Card';

export default function CreateSpellPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Inscribe a new spell into the grimoire
  const handleSubmit = async (name: string, incantation: string, ingredients: string, powerLevel: number) => {
    try {
      setLoading(true);
      await api.post('/spells', { name, incantation, ingredients, powerLevel });
      navigate('/spells');
    } catch (err) {
      alert('Failed to inscribe spell into grimoire');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-purple-300 mb-6">✨ Inscribe New Spell</h2>
      
      <Card>
        <SpellForm
          onSubmit={handleSubmit}
          onCancel={() => navigate('/spells')}
          submitLabel={loading ? '🔮 Inscribing...' : '✨ Cast Spell'}
        />
      </Card>
    </div>
  );
}
