import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import NoteEditor from '../components/NoteEditor';
import Card from '../components/Card';

export default function CreateNotePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (title: string, content: string) => {
    try {
      setLoading(true);
      await api.post('/notes', { title, content });
      navigate('/notes');
    } catch (err) {
      alert('Failed to create note');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Note</h2>
      
      <Card>
        <NoteEditor
          onSubmit={handleSubmit}
          onCancel={() => navigate('/notes')}
          submitLabel={loading ? 'Creating...' : 'Create Note'}
        />
      </Card>
    </div>
  );
}
