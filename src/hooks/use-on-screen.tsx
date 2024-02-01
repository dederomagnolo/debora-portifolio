import { useState, useEffect, useRef } from 'react'

export const useOnScreen = (ref: any) => {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observerRef?.current?.observe(ref.current)

    return () => {
      observerRef?.current?.disconnect()
    }
  }, [ref])

  return isOnScreen
}
