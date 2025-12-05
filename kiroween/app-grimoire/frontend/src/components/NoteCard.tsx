import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {note.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {note.content}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {formatDate(note.createdAt)}
        </span>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => navigate(`/notes/${note.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
