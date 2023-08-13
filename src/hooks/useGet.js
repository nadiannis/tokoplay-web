import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function useGet(url, id, initialData = null) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(null);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance.get(url);
        setData(response.data.data);
        setErrors(null);
        setTotalData(response.data.count ? response.data.count : 0);
      } catch (error) {
        setErrors(error);
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
    errors,
    totalData,
    setIsLoading,
    setData,
    setErrors,
    setTotalData,
  };
}
