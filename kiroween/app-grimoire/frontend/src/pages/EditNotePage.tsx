import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../lib/api';
import NoteEditor from '../components/NoteEditor';
import Card from '../components/Card';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function EditNotePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await api.get<Note>(`/notes/${id}`);
        if (response.success && response.data) {
          setNote(response.data);
        }
      } catch (err) {
        alert('Failed to load note');
        console.error(err);
        navigate('/notes');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

  const handleSubmit = async (title: string, content: string) => {
    if (!id) return;
    
    try {
      setSaving(true);
      await api.put(`/notes/${id}`, { title, content });
      navigate('/notes');
    } catch (err) {
      alert('Failed to update note');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Loading note...</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">Note not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Note</h2>
      
      <Card>
        <NoteEditor
          initialTitle={note.title}
          initialContent={note.content}
          onSubmit={handleSubmit}
          onCancel={() => navigate('/notes')}
          submitLabel={saving ? 'Saving...' : 'Save Changes'}
        />
      </Card>
    </div>
  );
}
