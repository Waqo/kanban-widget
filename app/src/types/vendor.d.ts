/// <reference types="@tanstack/react-query" />

// Declare global ReactQuery
declare const ReactQuery: {
    useQuery: typeof import('@tanstack/react-query').useQuery;
    useMutation: typeof import('@tanstack/react-query').useMutation;
    useQueryClient: typeof import('@tanstack/react-query').useQueryClient;
    QueryClient: typeof import('@tanstack/react-query').QueryClient;
    QueryClientProvider: typeof import('@tanstack/react-query').QueryClientProvider;
  };
  
  // Declare global ReactDOM
  declare const ReactDOM: {
    render(element: React.ReactElement, container: Element | null): void;
  };
  
  // Declare global React
  declare const React: typeof import('react');
  
  // Fix JSX namespace for JSX support
  declare namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any; // Allows JSX intrinsic elements like <div>, <span>, etc.
    }
  }

  // Add Zustand types
declare module 'zustand' {
    export const create: typeof import('zustand').create;
    export const createStore: typeof import('zustand').createStore;
    // Add other Zustand exports as needed
  }
  
  // Declare global Zustand
  declare const zustand: {
    create: <T>(config: (set: any) => T) => {
      (): T;
      <U>(selector: (state: T) => U): U;
    };
  };
  