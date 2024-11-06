// types/twitter.d.ts
declare namespace Twitter {
  interface WidgetOptions {
    height?: number;
    theme?: 'light' | 'dark';
    chrome?: string;
  }

  interface TimelineSource {
    sourceType: 'profile' | 'list' | 'collection';
    screenName?: string;
  }

  interface Widgets {
    createTimeline(
      source: TimelineSource,
      element: HTMLElement,
      options?: WidgetOptions
    ): Promise<void>;
    load(element?: HTMLElement): void;
  }
}

interface Window {
  twttr: {
    widgets: Twitter.Widgets;
    _e?: Array<() => void>;
    ready?: (callback: () => void) => void;
  }
}

