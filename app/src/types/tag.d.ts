import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Tag extends BaseRecord {
  // Required fields
  Tag_Name: string;      // Name of the tag
  Active_Status: boolean; // For filtering active tags
  
  // Optional fields
  Category?: "Action Required" | "Informational" | "Missing Information";
  Tag_Description?: string;
  Tag_Color?: string;    // Color code for the tag (e.g., "#FF0000")

  // Relationships
  Project?: Project[];   // Projects that have this tag
}