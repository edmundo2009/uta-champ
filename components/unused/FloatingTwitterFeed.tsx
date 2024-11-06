"use client";

import React from 'react';
import TwitterFeed from './TwitterFeed';
import { Card, CardContent } from '@/components/ui/card';

interface FloatingTwitterFeedProps {
  username: string;
  height?: number;
  theme?: 'light' | 'dark';
  component: React.ReactNode;
}

const FloatingTwitterFeed: React.FC<FloatingTwitterFeedProps> = ({
  username,
  height = 400,
  theme = 'light',
  component,
}) => {
  return (
    <div className="relative">
      <div className="z-10 fixed bottom-4 right-4 w-80 shadow-lg">
        <Card>
          <TwitterFeed 
            username={username}
            height={height}
            theme={theme}
          />
        </Card>
      </div>
      <div className="mt-40">{component}</div>
    </div>
  );
};

export default FloatingTwitterFeed;