import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGet, useInputs } from '../../hooks';
import { validateCommentForm } from '../../utils/validateForm';
import axiosInstance from '../../utils/axiosInstance';
import mergeArraysWithoutDuplicates from '../../utils/mergeArraysWithoutDuplicates';
import SectionTitle from '../section-title';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default function Comments() {
  const { videoId } = useParams();

  const {
    isLoading,
    data: comments,
    error: fetchCommentsError,
    totalData: totalComments,
    setData: setComments,
    setTotalData: setTotalComments,
  } = useGet(`/api/videos/${videoId}/comments?sort=recent`, videoId, []);
  const {
    values: comment,
    handleInputChange,
    reset,
  } = useInputs({ username: '', content: '' });

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const fetchMoreComments = async (videoId, page) => {
    try {
      const response = await axiosInstance.get(
        `/api/videos/${videoId}/comments?sort=recent&page=${page}`
      );
      const data = response.data;
      const newComments = mergeArraysWithoutDuplicates(comments, data.data);

      setComments(newComments);
      setTotalComments(data.count);
      setPage(page);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = {
      username: comment.username.trim(),
      content: comment.content,
    };
    const { isValid, errors } = validateCommentForm(body);
    setErrors(errors);
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axiosInstance.post(
        `/api/videos/${videoId}/comments`,
        body
      );
      const { data } = response.data;
      const newComments = mergeArraysWithoutDuplicates(data, comments);

      setComments(newComments);
      setTotalComments((prevTotalComments) => prevTotalComments + 1);
      setIsSubmitting(false);
      reset();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  if (fetchCommentsError) {
    return (
      <span className="block text-sm text-center font-bold py-12">
        Something went wrong
      </span>
    );
  }

  return (
    <>
      <div>
        <SectionTitle
          title={`Comments (${totalComments})`}
          className="px-4 mt-6 mb-2 lg:my-4"
        />
        {isLoading && (
          <span className="block loading loading-ring loading-lg mx-auto my-14"></span>
        )}
        {!isLoading && comments.length === 0 && (
          <span className="block text-sm text-center font-bold py-4">
            There are no comments available
          </span>
        )}
        {!isLoading && comments.length > 0 && (
          <CommentList
            comments={comments}
            hasMore={hasMore}
            fetchMore={() => fetchMoreComments(videoId, page + 1)}
            className="mx-4 pt-4 bg-gray-900 lg:mx-0 lg:pt-0 lg:bg-gray-950"
          />
        )}
      </div>
      <CommentForm
        comment={comment}
        errors={errors}
        handleComment={handleComment}
        handleInputChange={handleInputChange}
        isSubmitting={isSubmitting}
        className="bg-gray-950 lg:sticky lg:bottom-0 lg:z-50"
      />
    </>
  );
}
