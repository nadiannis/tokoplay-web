import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import axiosInstance from '../../utils/axiosInstance';
import mergeArraysWithoutDuplicates from '../../utils/mergeArraysWithoutDuplicates';
import Container from '../../components/container';
import SearchBar from '../../components/search-bar';
import VideoList from '../../components/video-list';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    setVideos(null);
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    if (page > 1) {
      fetchMoreVideos();
    } else {
      searchVideos();
    }
  }, [debouncedQuery, page]);

  const searchVideos = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/api/videos?sort=recent&limit=15&q=${debouncedQuery}&page=${page}`
      );
      const data = response.data;

      setVideos(data.data);
      setHasMore(page < data.totalPages);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setVideos(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreVideos = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/videos?sort=recent&limit=15&q=${debouncedQuery}&page=${page}`
      );
      const data = response.data;
      const newVideos = mergeArraysWithoutDuplicates(videos, data.data);

      setVideos(newVideos);
      setHasMore(page < data.totalPages);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setVideos(null);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const next = () => {
    setPage(page + 1);
  };

  if (error) {
    return (
      <span className="block text-sm text-center font-bold py-12">
        Something went wrong
      </span>
    );
  }

  return (
    <Container className="pb-10">
      <h1 className="font-bold text-2xl mt-4 sm:mt-5 px-1 sm:px-2">Search</h1>
      <SearchBar handleInputChange={handleInputChange} />
      <VideoList
        videos={videos}
        hasMore={hasMore}
        next={next}
        isLoading={isLoading}
      />
    </Container>
  );
}
