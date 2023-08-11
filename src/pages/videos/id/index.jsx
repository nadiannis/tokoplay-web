import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import Container from '../../../components/container';
import Products from '../../../components/products';
import Comments from '../../../components/comments';

export default function VideoDetailPage() {
  const { videoId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getVideo(videoId);
  }, [videoId]);

  const getVideo = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/api/videos/${id}`);
      const { data } = response.data;

      setVideo(data);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative flex flex-col"
      style={{ height: 'calc(100vh - 53px)' }}
    >
      {isLoading ? (
        <span className="block text-base text-center font-bold p-20 flex-auto">
          Loading...
        </span>
      ) : (
        <>
          <section className="2xl:h-full 2xl:flex-auto ml-0 2xl:ml-80 mr-0 lg:mr-80">
            <Container className="bg-gradient-to-t from-gray-950 from-5% via-gray-900 via-20% to-shade-800 to-75% py-4 lg:pb-6">
              <div className="rounded-lg pb-[56.25%] relative w-full shadow-video border border-indigo-950">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  width="560"
                  height="316"
                  src={video.videoUrl}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </Container>
            <div className="my-0 rounded-lg">
              <Container>
                <h1 className="font-bold text-xl">{video.title}</h1>
              </Container>
            </div>
          </section>
          <section className="2xl:w-80 2xl:h-full lg:mr-80 2xl:mr-0 shadow-xl bg-gray-950 2xl:fixed top-[53px] bottom-0 left-0 2xl:z-50">
            <Products products={products} />
          </section>
          <section className="w-full lg:h-full lg:w-80 shadow-xl bg-gray-950 lg:fixed top-[53px] bottom-0 right-0 lg:z-50 flex flex-col justify-between">
            <Comments />
          </section>
        </>
      )}
    </div>
  );
}
