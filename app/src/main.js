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

// Error boundary to catch React errors
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  // Log errors to console when caught
  React.useEffect(() => {
    if (hasError) {
      console.error('Error caught by boundary:', error);
    }
  }, [hasError, error]);

  // Show error UI if something breaks
  if (hasError) {
    return React.createElement('div', 
      { className: 'p-4 bg-red-50 border border-red-200 rounded-md' },
      [
        React.createElement('h2', { className: 'text-red-800' }, 'Something went wrong'),
        React.createElement('p', { className: 'text-red-600' }, error?.message)
      ]
    );
  }

  return children;
};

// Root component that wraps the app with necessary providers
const Root = () => {
  return React.createElement(
    ErrorBoundary,
    null,
    React.createElement(
      QueryClientProvider,
      { client: queryClient },
      React.createElement(App)  // Your main App component
    )
  );
};

// Initialize Zoho and mount the app
const init = async () => {
  try {
    console.log("Starting Zoho initialization...");
    await ZOHO.CREATOR.init();  // Initialize Zoho SDK
    console.log("Zoho initialization complete");

    // Mount the React app
    ReactDOM.render(
      React.createElement(Root),
      document.getElementById('root')
    );
  } catch (error) {
    console.error("Failed to initialize:", error);
  }
};

// Start everything
init();
