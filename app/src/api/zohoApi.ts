// ======================
// Global Declarations
// ======================
declare const ZOHO: {
  CREATOR: {
    API: {
      getAllRecords: (config: {
        appName: string;
        reportName: string;
        page: number;
        pageSize: number;
        criteria?: string;
      }) => Promise<any>;
      getRecordById: (config: {
        appName: string;
        reportName: string;
        id: string;
      }) => Promise<any>;
      addRecord: (config: {
        appName: string;
        formName: string;
        data: {
          data: Record<string, any>;
        };
      }) => Promise<any>;
      updateRecord: (config: {
        appName: string;
        reportName: string;
        id: string;
        data: {
          data: Record<string, any>;
        };
      }) => Promise<any>;
    };
  };
};

// ======================
// Configuration
// ======================
const API_CONFIG = {
  appName: "nexgen-pm-kanban",
  reports: {
    projects: "PM_Kanban_Projects",
    documents: "PM_Kanban_Documents",
    materials: "PM_Kanban_Materials",
    systems: "PM_Kanban_Systems",
    stages: "PM_Kanban_Stages",
    tags: "PM_Kanban_Tags",
    contacts: "PM_Kanban_Contacts",
    events: "PM_Kanban_Events",
    notes: "PM_Kanban_Notes",
    issues: "PM_Kanban_Issues",
    permits: "PM_Kanban_Permits",
    surveys: "PM_Kanban_Surveys",
  },
  pageSize: 200,
} as const;

// ======================
// Types
// ======================
interface ZohoResponse<T> {
  code: number;
  message?: string;
  data: T[];
}

class ZohoAPIError extends Error {
  constructor(message: string, public code?: number, public response?: any) {
    super(message);
    this.name = "ZohoAPIError";
  }
}

// ======================
// Read Operations
// ======================
export async function fetchPaginatedRecords<T>(
  reportName: string,
  criteria?: string
): Promise<T[]> {
  try {
    let page = 1;
    let hasMoreRecords = true;
    let allRecords: T[] = [];

    while (hasMoreRecords) {
      console.log(`Fetching ${reportName} - page ${page}`);

      const response: ZohoResponse<T> = await ZOHO.CREATOR.API.getAllRecords({
        appName: API_CONFIG.appName,
        reportName: reportName,
        page: page,
        pageSize: API_CONFIG.pageSize,
        criteria: criteria,
      });

      // Check for API errors
      if (response.code !== 3000) {
        throw new ZohoAPIError(
          response.message || "Unknown API Error",
          response.code,
          response
        );
      }

      allRecords = [...allRecords, ...response.data];

      // Check if we've received all records
      if (response.data.length < API_CONFIG.pageSize) {
        hasMoreRecords = false;
        console.log(`Finished fetching ${reportName}`);
      } else {
        page++;
      }
    }

    return allRecords;
  } catch (error) {
    console.error(`Error fetching ${reportName}:`, error);
    throw error instanceof ZohoAPIError
      ? error
      : new ZohoAPIError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
  }
}

export async function fetchRecordById<T>(
  reportName: string,
  recordId: string
): Promise<T> {
  try {
    const response = await ZOHO.CREATOR.API.getRecordById({
      appName: API_CONFIG.appName,
      reportName: reportName,
      id: recordId,
    });

    if (response.code !== 3000) {
      throw new ZohoAPIError(
        response.message || "Unknown API Error",
        response.code,
        response
      );
    }

    return response.data;
  } catch (error) {
    console.error(`Error fetching ${reportName} record ${recordId}:`, error);
    throw error instanceof ZohoAPIError
      ? error
      : new ZohoAPIError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
  }
}

// ======================
// Write Operations
// ======================
export async function addRecord<T>(
  formName: string,
  data: Record<string, any>
): Promise<T> {
  try {
    const response = await ZOHO.CREATOR.API.addRecord({
      appName: API_CONFIG.appName,
      formName: formName,
      data: {
        data: data,
      },
    });

    if (response.code !== 3000) {
      throw new ZohoAPIError(
        response.message || "Unknown API Error",
        response.code,
        response
      );
    }

    return response.data;
  } catch (error) {
    console.error(`Error adding record to ${formName}:`, error);
    throw error instanceof ZohoAPIError
      ? error
      : new ZohoAPIError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
  }
}

export async function updateRecord<T>(
  reportName: string,
  id: string,
  data: Record<string, any>
): Promise<T> {
  try {
    const response = await ZOHO.CREATOR.API.updateRecord({
      appName: API_CONFIG.appName,
      reportName: reportName,
      id: id,
      data: {
        data: data,
      },
    });

    if (response.code !== 3000) {
      throw new ZohoAPIError(
        response.message || "Unknown API Error",
        response.code,
        response
      );
    }

    return response.data;
  } catch (error) {
    console.error(`Error updating record ${id} in ${reportName}:`, error);
    throw error instanceof ZohoAPIError
      ? error
      : new ZohoAPIError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
  }
}

// ======================
// Exports
// ======================
export { API_CONFIG };
export type { ZohoResponse };
