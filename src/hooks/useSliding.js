// Node Modules
import { useState, useRef, useEffect, useMemo } from "react"

const PADDINGS = 110

const useSliding = (elementWidth, elementsCount) => {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [distance, setDistance] = useState(0)
  const [totalInViewport, setTotalInViewport] = useState(0)
  const [viewed, setViewed] = useState(0)

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS

    setContainerWidth(containerWidth)
    setTotalInViewport(Math.floor(containerWidth / elementWidth))
  }, [containerRef.current])

  const handlePrev = () => {
    setViewed(viewed - totalInViewport)
    setDistance(distance + containerWidth)
  }

  const handleNext = () => {
    setViewed(viewed + totalInViewport)
    setDistance(distance - containerWidth)
  }

  const slideProps = useMemo(
    () => ({ style: { transform: `translate3d(${distance}px, 0, 0)` } }),
    [distance]
  )

  const hasPrev = distance < 0
  const hasNext = viewed + totalInViewport < elementsCount

  return { handlePrev, hasPrev, handleNext, hasNext, slideProps, containerRef }
}

export default useSliding
