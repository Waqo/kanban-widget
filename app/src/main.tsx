import React from "react";
import { App } from "./App";

// Get React Query from the global scope (loaded via CDN in widget.html)
const { QueryClient, QueryClientProvider } = ReactQuery;

// Configure React Query client with sensible defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,  // Don't refetch when window regains focus
      retry: 1,                     // Only retry failed requests once
      staleTime: 5 * 60 * 1000,    // Consider data fresh for 5 minutes
    },
  },
});

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// Error boundary to catch React errors
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError] = React.useState(false);
  const [error] = React.useState<Error | null>(null);
  
  React.useEffect(() => {
    if (hasError) {
      console.error('Error caught by boundary:', error);
    }
  }, [hasError, error]);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h2 className="text-red-800">Something went wrong</h2>
        <p className="text-red-600">{error?.message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

// Root component that wraps the app with necessary providers
const Root: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

// Initialize Zoho and mount the app
const init = async () => {
  try {
    console.log("Starting Zoho initialization...");
    await ZOHO.CREATOR.init();
    console.log("Zoho initialization complete");

    ReactDOM.render(
      <Root />,
      document.getElementById('root')
    );
  } catch (error) {
    console.error("Failed to initialize:", error);
  }
};

init();
