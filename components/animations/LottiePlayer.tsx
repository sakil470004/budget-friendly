'use client';

import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  style = {},
}) => {
  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
      style={style}
    />
  );
};

export default LottiePlayer;