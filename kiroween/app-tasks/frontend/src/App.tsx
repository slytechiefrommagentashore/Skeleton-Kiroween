import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import TaskListPage from './pages/TaskListPage';
import CreateTaskPage from './pages/CreateTaskPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-gray-900">Tasks App</h1>
            </div>
          </nav>
          
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" replace />} />
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/tasks/create" element={<CreateTaskPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
