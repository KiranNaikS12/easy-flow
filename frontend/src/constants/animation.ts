import type { MotionProps, Transition } from 'framer-motion';
import type { CSSProperties } from 'react';

interface ShimmerConfig {
  initialStyles: CSSProperties;
  animate: MotionProps['animate'];
  transition: Transition;
}

interface BouncConfig {
  initialStyles: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition: Transition;
}

export const premiumShimmer: ShimmerConfig = {
  // Styles applied when the element mounts
  initialStyles: {
    backgroundImage:
      'linear-gradient(90deg, #000, #3EB489, #000, #3EB489, #FFFFFF)',
    backgroundSize: '200% 100%',
    display: 'inline-block',
  },
  // Keyframes for Framer Motion to animate through
  animate: {
    backgroundPosition: ['0% 0%', '-200% 0%'],
  },
  // Controls speed, easing, and looping behaviors
  transition: {
    duration: 8,
    ease: 'linear',
    repeat: Infinity,
  },
};

export const bounceEffect: BouncConfig = {
  initialStyles: {
    y: 15,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
  },
};

export const bounceEffect2: BouncConfig = {
  initialStyles: {
    y: 15,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    delay: 0.6,
    duration: 0.8,
  },
};

