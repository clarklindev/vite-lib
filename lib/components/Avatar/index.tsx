import React, { useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

const avatar = cva(
  ['align-middle rounded-full object-cover aspect-square overflow-hidden'], 
  {
    variants: {
      size: {
        'S': ['w-[30px]', 'h-[30px]'],
        'M': ['w-[45px]', 'h-[45px]'],
        'L': ['w-[60px]', 'h-[60px]'],
      },
      border: {
        true: ['border-1', 'border-gray-300'],
        false: ['border-none'],
      },
    },
    defaultVariants: {
      size: 'M',
      border: true,
    },
  }
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatar> {
  imageUrl: string;
}

const Avatar = ({ className, size, imageUrl, border, children, ...props }: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Clear previous error on new imageUrl load
    setHasError(false);
  }, [imageUrl]);

  const handleImageError = () => setHasError(true);

  return (
    <div
      data-component={Avatar.displayName}
      className={avatar({ size, border, className })}
      {...props}
    >
      {
          hasError ? (
          <div className="flex items-center justify-center w-full h-full bg-transparent border-2 border-gray-300 rounded-full">
            {/* Placeholder Circle (empty circle with border) */}
          </div>
        ):
        (<img
          src={imageUrl}
          alt="avatar"
          className={`w-full h-full object-cover rounded-full`}
          onError={handleImageError}
          style={{ display: !hasError ? 'block' : 'none' }}
        />)
      }

      {children}
    </div>
  );
};

Avatar.displayName = 'Avatar';
export { Avatar };
