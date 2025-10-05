'use client';

import { useEffect, useState } from 'react';
import LottiePlayer from './LottiePlayer';

interface TextAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ className, style }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Text.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return <div className={className} style={style} />;
  }

  return (
    <LottiePlayer
      animationData={animationData}
      className={className}
      style={style}
      loop={true}
      autoplay={true}
    />
  );
};

export default TextAnimation;