import { Routes, Route } from 'react-router-dom';
import { HomePage } from './routes/home';
import { NotFoundPage } from './routes/notFound';

function App() {
  return (
    <main className="w-full h-full absolute ">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App
