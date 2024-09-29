import { useState } from 'react';

export function useToggle() {
  const [toggle, setToggle] = useState(false);

  const handleToggleOn = () => {
    setToggle(true);
  };

  const handleToggleOff = () => {
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return {
    handleToggleOn,
    handleToggleOff,
    handleToggle,
    toggle,
  };
}
