import { Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/home';
import { NotFoundPage } from './routes/notFound';
import { Hook } from './routes/hook';

function App() {
  return (
    <main className="w-full h-full absolute ">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hook/:name' element={<Hook />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App
