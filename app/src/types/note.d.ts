import type { BaseRecord } from './base';
import type { Project } from './project';
import type { User } from './user.d.ts';


export interface Note extends BaseRecord {
  Note: string;
  Author: string;
  Replied_To?: string;  // References another Note.ID
  Replies?: string[];   // Array of Note.IDs
  Notify_Sales: boolean;
  User?: string;
  Project: Project;
  Tagged_Users?: User[];
}