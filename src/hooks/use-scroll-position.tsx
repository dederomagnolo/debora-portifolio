import { useState, useEffect } from "react";

export const useScrollPosition = (callback?: Function) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const updatePosition = () => {
    const pageYOffset = window.pageYOffset
    callback && callback(pageYOffset)
    setScrollPosition(pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', updatePosition)

    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, []);

  return scrollPosition;
};