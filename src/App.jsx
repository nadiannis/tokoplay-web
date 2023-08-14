import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import HomePage from './pages';
import VideoDetailPage from './pages/videos/id';
import NotFoundPage from './pages/not-found';
import SearchPage from './pages/search';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/videos/:videoId" element={<VideoDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
