import {useCallback, useEffect, useRef, useState} from "react";

export function useScroll(){
  const [showJumpToBottom, setShowJumpToBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollToBottom = useCallback(() => {
    const container = containerRef.current;
    if(container){
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if(container) {
      const {scrollTop, scrollHeight, clientHeight} = container;
      const isBottom = Math.ceil(scrollTop + clientHeight) === scrollHeight;
      setShowJumpToBottom(!isBottom);
    }
  }, [])



  useEffect(() => {
    const container = containerRef.current;
    window.addEventListener('resize', handleScrollToBottom)
    container && container.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('resize', handleScrollToBottom);
      container && container.removeEventListener('scroll', handleScroll);
    }

    // don't need dependency array since it only runs once
  });

  return { containerRef, showJumpToBottom, handleScrollToBottom };
}