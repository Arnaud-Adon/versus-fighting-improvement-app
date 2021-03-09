import React, { useState, useMemo } from "react";

export const useForm = (defaultValues) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setErrors];
  const [isDirty, setIsDirty] = useState(false);
  const [secure, setSecure] = useState(true);

  const handleOnChange = (value) => (event) => {
    setIsDirty(true);
    const val = value ?? defaultValues;
  };

  const validate = () => {};

  const isValid = useMemo(() => {}, [formValues, handleOnChange]);

  return {
    formValues,
    errors,
    secure,
    isValid: Boolean(!isValid && isDirty),
    handleOnChange,
    validate,
  };
};
