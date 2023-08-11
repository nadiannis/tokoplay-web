import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import VideoCard from './video-card';

export default function VideoList() {
  const [isLoading, setisLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setisLoading(true);

    try {
      const response = await axiosInstance.get('/api/videos');
      const { data } = response.data;

      setVideos(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <div className="mt-5 flex flex-wrap">
      {isLoading && (
        <span className="block text-base text-center font-bold p-20 flex-auto">
          Loading...
        </span>
      )}
      {!isLoading && videos.length === 0 && (
        <span className="block text-base text-center font-bold py-12 flex-auto">
          There are no videos available
        </span>
      )}
      {!isLoading &&
        videos.length > 0 &&
        videos.map((video) => <VideoCard key={video._id} video={video} />)}
    </div>
  );
}
