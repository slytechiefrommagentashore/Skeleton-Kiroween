import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import TaskCard from '../components/TaskCard';
import Button from '../components/Button';

interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

export default function TaskListPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get<Task[]>('/tasks');
      if (response.success && response.data) {
        setTasks(response.data);
      }
    } catch (err) {
      setError('Failed to load tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      alert('Failed to delete task');
      console.error(err);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await api.put<Task>(`/tasks/${id}`, { status: newStatus });
      if (response.success && response.data) {
        setTasks(tasks.map(task => 
          task.id === id ? response.data! : task
        ));
      }
    } catch (err) {
      alert('Failed to update task status');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Loading tasks...</p>
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
        <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
        <Button onClick={() => navigate('/tasks/create')}>
          Create Task
        </Button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No tasks yet</p>
          <Button onClick={() => navigate('/tasks/create')}>
            Create your first task
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
