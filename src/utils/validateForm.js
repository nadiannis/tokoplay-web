export const validateCommentForm = (data) => {
  let errors = {};
  let isUsernameValid = true;
  let isContentValid = true;

  const usernameRegex = /^[a-zA-Z0-9@._+-]*$/;

  if (data.username === '') {
    errors.username = 'Username is required';
    isUsernameValid = false;
  } else if (!usernameRegex.test(data.username)) {
    errors.username =
      'Username can only contain letters, numbers, and @/./+/-/_ characters';
    isUsernameValid = false;
  }

  if (data.content === '') {
    errors.content = 'Comment cannot be empty';
    isContentValid = false;
  }

  return { isValid: isUsernameValid && isContentValid, errors };
};
