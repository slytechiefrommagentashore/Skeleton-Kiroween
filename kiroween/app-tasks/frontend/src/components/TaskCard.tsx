import Card from './Card';
import Button from './Button';

interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => void;
}

export default function TaskCard({ task, onDelete, onStatusChange }: TaskCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getNextStatus = (currentStatus: string) => {
    switch (currentStatus) {
      case 'pending':
        return 'in-progress';
      case 'in-progress':
        return 'completed';
      case 'completed':
        return 'pending';
      default:
        return 'pending';
    }
  };

  return (
    <Card>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">
          {task.title}
        </h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        {formatDate(task.createdAt)}
      </p>
      
      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => onStatusChange(task.id, getNextStatus(task.status))}
          className="flex-1"
        >
          {task.status === 'completed' ? 'Reopen' : 'Progress'}
        </Button>
        <Button
          variant="danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
