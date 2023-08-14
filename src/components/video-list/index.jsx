import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// import axiosInstance from '../../utils/axiosInstance';
import VideoCard from './video-card';
// import mergeArraysWithoutDuplicates from '../../utils/mergeArraysWithoutDuplicates';

export default function VideoList({
  videos,
  // setVideos,
  // page,
  // setPage,
  hasMore,
  next,
  // setHasMore,
  isLoading,
  // errors,
  // searchQuery = '',
}) {
  // const fetchMoreVideos = async (page) => {
  //   try {
  //     const response = await axiosInstance.get(
  //       `/api/videos?sort=recent&limit=15&page=${page}&q=${searchQuery}`
  //     );
  //     const data = response.data;
  //     const newVideos = mergeArraysWithoutDuplicates(videos, data.data);
  //     setVideos(newVideos);
  //     setPage(page);
  //     setHasMore(page < data.totalPages);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // if (errors) {
  //   return (
  //     <span className="block text-sm text-center font-bold py-12">
  //       Something went wrong
  //     </span>
  //   );
  // }

  // console.log('page number in video list:', page);

  return (
    <>
      {isLoading && (
        <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14"></span>
      )}
      {!isLoading && videos?.length === 0 && (
        <span className="block text-sm text-center font-bold py-12">
          There are no videos available
        </span>
      )}
      {!isLoading && videos?.length > 0 && (
        <InfiniteScroll
          className="mt-5 flex flex-wrap overflow-y-visible"
          dataLength={videos.length}
          hasMore={hasMore}
          next={next}
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

VideoList.propTypes = {
  videos: PropTypes.array,
  hasMore: PropTypes.bool,
  next: PropTypes.func,
  isLoading: PropTypes.bool,
};
