import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import HomePage from './pages';
import VideoDetailPage from './pages/videos/id';
import NotFoundPage from './pages/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/videos/:id" element={<VideoDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
