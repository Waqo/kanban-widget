// Zoho Types
declare const ZOHO: {
  CREATOR: {
    init(): Promise<void>;
    UTIL: {
      getQueryParams(): Promise<any>;
    };
    API: {
      getAllRecords(config: {
        appName: string;
        reportName: string;
        page: number;
        pageSize: number;
        criteria?: string;
      }): Promise<any>;
      getRecordById(config: {
        appName: string;
        reportName: string;
        id: string;
      }): Promise<any>;
      addRecord(config: {
        appName: string;
        formName: string;
        data: {
          data: Record<string, any>;
        };
      }): Promise<any>;
      updateRecord(config: {
        appName: string;
        reportName: string;
        id: string;
        data: {
          data: Record<string, any>;
        };
      }): Promise<any>;
      deleteRecord(config: {
        appName: string;
        reportName: string;
        criteria: string;
      }): Promise<any>;
      uploadFile(config: {
        appName: string;
        reportName: string;
        id: string;
        fieldName: string;
        file: File;
        parentId?: string;
      }): Promise<any>;
    };
  };
};

// Application Types
interface WidgetParams {
  stages: string[];
  tags: string[];
  userName: string;
}

interface BaseRecord {
  ID: string;
  Created_Time: string;
  Modified_Time: string;
  Created_By?: {
    name: string;
    id: string;
  };
  Modified_By?: {
    name: string;
    id: string;
  };
}