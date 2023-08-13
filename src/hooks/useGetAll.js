import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function useGetAll(url, initialData = null) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const getAllData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance.get(url);
        setData(response.data.data);
        setErrors(null);
      } catch (error) {
        setErrors(error);
        setData(initialData);
      } finally {
        setIsLoading(false);
      }
    };

    getAllData();
  }, [url]);

  return {
    isLoading,
    data,
    errors,
    setIsLoading,
    setData,
    setErrors,
  };
}
