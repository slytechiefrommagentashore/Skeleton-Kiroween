import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import TaskForm from '../components/TaskForm';
import Card from '../components/Card';

export default function CreateTaskPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (title: string, status: string) => {
    try {
      setLoading(true);
      await api.post('/tasks', { title, status });
      navigate('/tasks');
    } catch (err) {
      alert('Failed to create task');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Task</h2>
      
      <Card>
        <TaskForm
          onSubmit={handleSubmit}
          onCancel={() => navigate('/tasks')}
          submitLabel={loading ? 'Creating...' : 'Create Task'}
        />
      </Card>
    </div>
  );
}
