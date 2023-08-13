import { useState } from 'react';

export default function useInputs(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const reset = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleInputChange,
    reset,
  };
}
