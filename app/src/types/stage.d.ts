import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Stage extends BaseRecord {
  // Required fields
  Stage_Name: string;     // Must be unique
  Stage_Order: number;    // For ordering stages in Kanban
  Active_Status: boolean; // For filtering active stages

  // Optional fields
  Description?: string;   // Optional description of the stage
  
  // Relationships
  Project?: Project[];    // Projects in this stage
}
