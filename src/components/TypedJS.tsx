import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedJSProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

const TypedJS: React.FC<TypedJSProps> = ({ strings, typeSpeed = 100, backSpeed = 150, loop = true }) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} />;
};

export default TypedJS;