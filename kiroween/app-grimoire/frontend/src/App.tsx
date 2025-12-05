import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SpellsListPage from './pages/SpellsListPage';
import CreateSpellPage from './pages/CreateSpellPage';
import EditSpellPage from './pages/EditSpellPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
          <nav className="bg-black bg-opacity-50 shadow-lg border-b border-purple-500">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-3xl font-bold text-purple-300 flex items-center gap-2">
                🔮 Grimoire - Spellbook of Shadows
              </h1>
            </div>
          </nav>
          
          <Routes>
            <Route path="/" element={<Navigate to="/spells" replace />} />
            <Route path="/spells" element={<SpellsListPage />} />
            <Route path="/spells/create" element={<CreateSpellPage />} />
            <Route path="/spells/:id/edit" element={<EditSpellPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
