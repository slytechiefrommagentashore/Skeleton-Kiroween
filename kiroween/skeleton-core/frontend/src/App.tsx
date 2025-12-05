import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to Skeleton Core
                </h1>
                <p className="mt-4 text-gray-600">
                  Your fullstack boilerplate is ready to use.
                </p>
              </div>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
