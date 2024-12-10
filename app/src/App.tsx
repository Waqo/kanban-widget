import React from "react";
import { KanbanBoard } from './components/KanbanBoard/KanbanBoard';

interface WidgetParams {
  stages: string[];
  tags: string[];
  userName: string;
}

export const App = (): React.ReactElement => {
  // State for loading and error handling
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  // State for widget parameters
  const [, setParams] = React.useState<WidgetParams>({
    stages: [],
    tags: [],
    userName: '',
  });

  // Initialize widget parameters
  React.useEffect(() => {
    const loadParams = async () => {
      try {
        const queryParams = await ZOHO.CREATOR.UTIL.getQueryParams();
        setParams({
          stages: queryParams.stages || [],
          tags: queryParams.tags || [],
          userName: queryParams.userName || '',
        });
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load parameters:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setIsLoading(false);
      }
    };

    loadParams();
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h2 className="text-red-800">Error</h2>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

  // Main app layout
  return (
    <div className="min-h-screen bg-gray-50">
      <KanbanBoard />
    </div>
  );
};
