import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Anima apenas uma vez quando entra na view
    amount: threshold,
    margin: '-50px', // Trigger a animação um pouco antes do elemento aparecer
  });

  return { ref, isInView };
};
