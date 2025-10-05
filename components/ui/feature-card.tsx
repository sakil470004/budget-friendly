'use client';

import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
  gradient = false
}) => {
  return (
    <div className={cn(
      'p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105',
      gradient 
        ? 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:from-purple-100 hover:to-blue-100' 
        : 'bg-white border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-lg',
      className
    )}>
      {icon && (
        <div className="mb-4 text-purple-600">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export { FeatureCard };