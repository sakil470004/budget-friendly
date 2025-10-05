'use client';

import { useEffect, useState } from 'react';
import LottiePlayer from './LottiePlayer';

interface LogoAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ className, style }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Logo.json')
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

export default LogoAnimation;