import React, { useState, useEffect, useRef } from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import { useInView, useReducedMotion } from 'framer-motion';

interface DecryptedTextProps extends Omit<TypographyProps, 'children'> {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
}

const defaultChars = '01!@#$%^&*()_+{}[]|:;<>,.?/~';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  characters = defaultChars,
  ...props
}) => {
  const [displayText, setDisplayText] = useState('');
  const isAnimatingRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    if (!isInView || isAnimatingRef.current) return;

    let iteration = 0;
    isAnimatingRef.current = true;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        isAnimatingRef.current = false;
      }

      iteration += 1 / (maxIterations / text.length);
    }, speed);

    return () => {
      clearInterval(interval);
      isAnimatingRef.current = false;
    };
  }, [isInView, shouldReduceMotion, text, speed, maxIterations, characters]);

  return (
    <Typography component="span" ref={containerRef} {...props}>
      {displayText || text.replace(/./g, '0')}
    </Typography>
  );
};
