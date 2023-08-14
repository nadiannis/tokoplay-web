import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoCard from './video-card';

export default function VideoList({ videos, hasMore, next, isLoading }) {
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
