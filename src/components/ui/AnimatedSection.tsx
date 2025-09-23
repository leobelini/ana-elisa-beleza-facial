import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../../hooks/useAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className,
}) => {
  const { ref, isInView } = useAnimation(threshold);

  // Define as configurações de animação baseadas na direção
  const getAnimationConfig = () => {
    const baseConfig = {
      initial: { opacity: 0 },
      animate: isInView ? { opacity: 1 } : { opacity: 0 },
      transition: {
        duration,
        delay,
        ease: 'easeOut' as const, // Easing suave
      },
    };

    switch (direction) {
      case 'up':
        return {
          ...baseConfig,
          initial: { ...baseConfig.initial, y: 50 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        };
      case 'down':
        return {
          ...baseConfig,
          initial: { ...baseConfig.initial, y: -50 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 },
        };
      case 'left':
        return {
          ...baseConfig,
          initial: { ...baseConfig.initial, x: 50 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 },
        };
      case 'right':
        return {
          ...baseConfig,
          initial: { ...baseConfig.initial, x: -50 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
        };
      case 'fade':
      default:
        return baseConfig;
    }
  };

  return (
    <motion.div ref={ref} className={className} {...getAnimationConfig()}>
      {children}
    </motion.div>
  );
};
