'use client';

import { useEffect, useState } from 'react';
import LottiePlayer from './LottiePlayer';

interface BotAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const BotAnimation: React.FC<BotAnimationProps> = ({ className, style }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Bot.json')
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

export default BotAnimation;