import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function useGet(url, id, initialData = null) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [totalData, setTotalData] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance.get(url);
        setData(response.data.data);
        setTotalData(response.data.count ? response.data.count : 0);
        setError(null);
      } catch (error) {
        setError(error);
        setData(initialData);
        setTotalData(null);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url, id]);

  return {
    isLoading,
    data,
    totalData,
    error,
    setIsLoading,
    setData,
    setTotalData,
    setError,
  };
}
