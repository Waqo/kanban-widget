import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Document extends BaseRecord {
  Document_Name: string;
  Upload_Date: string;
  File_Upload?: string;
  Document_Type: 
    | "Utility Bill" 
    | "Proposal" 
    | "Relationship Letter" 
    | "Owner ID" 
    | "Signed Contract" 
    | string;  // Allow other types
  
  Description?: string;
  Project?: Project;
  WorkDrive_Link?: string;
  Date_Uploaded_to_WorkDrive?: string;
  Upload_Attempted?: string;
  Upload_to_WorkDrive_with_Kanban: boolean;
}