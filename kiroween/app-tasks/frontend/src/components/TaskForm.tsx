import { useState, FormEvent } from 'react';
import Input from './Input';
import Button from './Button';

interface TaskFormProps {
  initialTitle?: string;
  initialStatus?: string;
  onSubmit: (title: string, status: string) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function TaskForm({
  initialTitle = '',
  initialStatus = 'pending',
  onSubmit,
  onCancel,
  submitLabel = 'Create Task',
}: TaskFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [status, setStatus] = useState(initialStatus);
  const [errors, setErrors] = useState<{ title?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors: { title?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length > 200) {
      newErrors.title = 'Title must be 200 characters or less';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onSubmit(title, status);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
        placeholder="Enter task title"
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
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
