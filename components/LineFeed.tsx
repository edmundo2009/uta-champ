"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';

interface LineFeedProps {
  accountUrl: string;
  height?: number;
}

const LineFeed: React.FC<LineFeedProps> = ({
  accountUrl,
  height = 600
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setError('Failed to load LINE account page');
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl overflow-hidden
    rounded-lg
    ">
      <div className="flex items-center gap-2 mb-4 p-2">
        {/* LINEのチャット　ボタンからQRコードを読み込んでください */}
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
      {error ? (
        <div className="text-red-500 p-4 text-center">
          {error}
        </div>
      ) : (
        <div className="relative min-h-96 w-full">
        {/* <div className="relative min-h-96 w-full"> */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          )}
          <iframe
            src={accountUrl}
            height={height}
            className="w-full border-0 overflow-hidden"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      )}
      {/* <div className="mt-2 text-sm text-center text-black">
        <a
          href={accountUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:underline"
        >
          LINEで開く
        </a>
      </div> */}
    </div>
  );
};

export default LineFeed;