import React from 'react';

export function BerlinLogo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const heights = {
    small: 'h-9', // 36px
    default: 'h-12', // 48px
    large: 'h-16' // 64px
  };

  const bearSizes = {
    small: 'w-7 h-7', // 28px
    default: 'w-10 h-10', // 40px
    large: 'w-12 h-12' // 48px
  };

  const textSizes = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-1 ${heights[size]}`}>
      {/* "Berlin" Wordmark */}
      <span className={`font-bold ${textSizes[size]}`} style={{ color: '#000000' }}>
        Berlin
      </span>

      {/* Red Square with White Bear */}
      <div
        className={`${bearSizes[size]} flex items-center justify-center`}
        style={{ backgroundColor: '#E40422' }}
      >
        {/* Simplified Bear Icon - Replace with official SVG */}
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="w-3/4 h-3/4"
          aria-label="Berlin Bear"
        >
          {/* Simplified bear silhouette placeholder */}
          <path d="M12 2C10.9 2 10 2.9 10 4C10 4.3 10.1 4.6 10.2 4.9C8.9 5.6 8 7 8 8.5V12C8 13.1 8.4 14.1 9 14.9V18C9 19.1 9.9 20 11 20H13C14.1 20 15 19.1 15 18V14.9C15.6 14.1 16 13.1 16 12V8.5C16 7 15.1 5.6 13.8 4.9C13.9 4.6 14 4.3 14 4C14 2.9 13.1 2 12 2M10 9C10 8.4 10.4 8 11 8C11.6 8 12 8.4 12 9C12 9.6 11.6 10 11 10C10.4 10 10 9.6 10 9M14 9C14 9.6 13.6 10 13 10C12.4 10 12 9.6 12 9C12 8.4 12.4 8 13 8C13.6 8 14 8.4 14 9M12 13C11.2 13 10.5 12.7 10 12.2C10.2 11.5 10.7 11 11.3 10.7C11.5 10.9 11.7 11 12 11C12.3 11 12.5 10.9 12.7 10.7C13.3 11 13.8 11.5 14 12.2C13.5 12.7 12.8 13 12 13Z" />
        </svg>
      </div>

      {/* ".de" Extension */}
      <span className={`${textSizes[size]} font-normal`} style={{ color: '#666666' }}>
        .de
      </span>
    </div>
  );
}

export function BerlinLogoOfficial() {
  return (
    <div className="flex items-center gap-2">
      {/* Official Logo - Replace this entire div with the official SVG */}
      <div className="relative">
        <span className="text-2xl font-bold" style={{ color: '#000000' }}>
          Berlin
        </span>
        <div
          className="inline-flex items-center justify-center w-10 h-10 ml-1"
          style={{ backgroundColor: '#E40422' }}
        >
          <span className="text-white text-xs font-bold">BEAR</span>
        </div>
        <span className="text-2xl" style={{ color: '#666666' }}>
          .de
        </span>
      </div>
      <div className="text-xs text-medium-grey mt-4">
        {/* Note: Replace with official logo SVG from Berlin.de/markenhandbuch */}
      </div>
    </div>
  );
}
