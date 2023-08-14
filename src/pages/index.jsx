import { useEffect, useState } from 'react';
import Container from '../components/container';
import VideoList from '../components/video-list';
import axiosInstance from '../utils/axiosInstance';
import mergeArraysWithoutDuplicates from '../utils/mergeArraysWithoutDuplicates';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (page > 1) {
      fetchMoreVideos();
    } else {
      getVideos();
    }
  }, [page]);

  const getVideos = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/api/videos?sort=recent&limit=15&page=${page}`
      );
      const data = response.data;

      setVideos(data.data);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreVideos = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/videos?sort=recent&limit=15&page=${page}`
      );
      const data = response.data;
      const newVideos = mergeArraysWithoutDuplicates(videos, data.data);

      setVideos(newVideos);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  console.log('page number in home page:', page);

  return (
    <Container>
      <h1 className="font-bold text-2xl mt-4 sm:mt-5 px-1 sm:px-2">Browse</h1>
      <VideoList
        videos={videos}
        hasMore={hasMore}
        next={next}
        isLoading={isLoading}
      />
    </Container>
  );
}
