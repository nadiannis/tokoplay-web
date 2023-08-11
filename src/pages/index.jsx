import Container from '../components/container';
import VideoList from '../components/video-list';

export default function HomePage() {
  return (
    <Container>
      <h1 className="font-bold text-2xl mt-4 sm:mt-5 px-1 sm:px-2">Browse</h1>
      <VideoList />
    </Container>
  );
}
