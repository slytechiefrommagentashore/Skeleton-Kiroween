import { useState, FormEvent } from 'react';
import Input from './Input';
import Button from './Button';

interface NoteEditorProps {
  initialTitle?: string;
  initialContent?: string;
  onSubmit: (title: string, content: string) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function NoteEditor({
  initialTitle = '',
  initialContent = '',
  onSubmit,
  onCancel,
  submitLabel = 'Save',
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors: { title?: string; content?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onSubmit(title, content);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
        placeholder="Enter note title"
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px] ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter note content"
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content}</p>
        )}
      </div>
      
      <div className="flex gap-2">
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
