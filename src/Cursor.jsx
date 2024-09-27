import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

function Cursor() {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(()=>{
      if(cursorDotRef.current && cursorOutlineRef.current){
        function mouseMove(e) {
          const x = e.clientX;
          const y = e.clientY;

          cursorDotRef.current.style.top = `${y}px`;
          cursorDotRef.current.style.left = `${x}px`;

          cursorOutlineRef.current.animate(
            { left: `${x}px`, top: `${y}px` },
            { duration: 500, fill: "forwards" }
          );
        };
        window.addEventListener("mousemove",mouseMove);
        return () => window.removeEventListener("mousemove",mouseMove);
      }
    },[])

  return (
    <>
      <div class="cursor-dot" ref={cursorDotRef}></div>
      <div class="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
}

export default Cursor