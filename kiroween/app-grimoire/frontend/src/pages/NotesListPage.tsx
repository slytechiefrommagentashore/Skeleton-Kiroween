import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import NoteCard from '../components/NoteCard';
import Button from '../components/Button';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function NotesListPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await api.get<Note[]>('/notes');
      if (response.success && response.data) {
        setNotes(response.data);
      }
    } catch (err) {
      setError('Failed to load notes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      alert('Failed to delete note');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Loading notes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Notes</h2>
        <Button onClick={() => navigate('/notes/create')}>
          Create Note
        </Button>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No notes yet</p>
          <Button onClick={() => navigate('/notes/create')}>
            Create your first note
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
