import { useState } from 'react';

export function useInputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return { showPassword, handleShowPassword };
}
