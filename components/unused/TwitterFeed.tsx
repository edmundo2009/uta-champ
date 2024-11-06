"use client";

import React, { useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

interface TwitterFeedProps {
  username?: string;
  height?: number;
  theme?: 'light' | 'dark';
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({
  username = 'twitter',
  height = 600,
  theme = 'light'
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!twitterRef.current || hasInitialized.current) return;

    const initializeTwitterWidget = () => {
      // Initialize Twitter widget array if it doesn't exist
      window.twttr = window.twttr || {};
      window.twttr._e = window.twttr._e || [];

      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      script.setAttribute('async', 'true');
      script.setAttribute('charset', 'utf-8');

      script.onload = () => {
        if (window.twttr && window.twttr.ready) {
          window.twttr.ready((twttr) => {
            if (twitterRef.current) {
              twttr.widgets.createTimeline(
                {
                  sourceType: 'profile',
                  screenName: username
                },
                twitterRef.current,
                {
                  height: height,
                  theme: theme,
                  chrome: 'noheader,nofooter',
                  dnt: true // Do Not Track
                }
              ).then(() => {
                setIsLoading(false);
                hasInitialized.current = true;
              }).catch((err: Error) => {
                console.error('Twitter widget error:', err);
                setError('Failed to load Twitter feed');
                setIsLoading(false);
              });
            }
          });
        } else {
          setError('Twitter widget initialization failed');
          setIsLoading(false);
        }
      };

      script.onerror = () => {
        setError('Failed to load Twitter widget script');
        setIsLoading(false);
      };

      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    };

    initializeTwitterWidget();
  }, [username, height, theme]);
  return (
    <div className="w-full max-w-2xl overflow-hidden">
      <div className="flex items-center gap-2 mb-4 p-2">
        Twitter Feed
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
      {error ? (
        <div className="text-red-500 p-4 text-center">
          {error}
        </div>
      ) : (
        <div
          ref={twitterRef}
          className="min-h-96 w-full overflow-x-hidden"
        />
      )}
    </div>
  );

};

export default TwitterFeed;