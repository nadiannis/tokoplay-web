import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAll } from '../../hooks';
import axiosInstance from '../../utils/axiosInstance';
import VideoCard from './video-card';

export default function VideoList() {
  const {
    isLoading,
    data: videos,
    errors,
    setData: setVideos,
  } = useGetAll('/api/videos?sort=recent', []);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreVideos = async (page) => {
    try {
      const response = await axiosInstance.get(
        `/api/videos?sort=recent&page=${page}`
      );
      const data = response.data;

      setVideos((prevVideos) => [...prevVideos, ...data.data]);
      setPage(page);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(page);

  if (errors) {
    return (
      <span className="block text-sm text-center font-bold py-12">
        Something went wrong
      </span>
    );
  }

  return (
    <>
      {isLoading && (
        <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14"></span>
      )}
      {!isLoading && videos.length === 0 && (
        <span className="block text-sm text-center font-bold py-12">
          There are no videos available
        </span>
      )}
      {!isLoading && videos.length > 0 && (
        <InfiniteScroll
          className="mt-5 flex flex-wrap overflow-y-visible"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => fetchMoreVideos(page + 1)}
          loader={
            <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14"></span>
          }
        >
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
