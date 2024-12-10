import type { BaseRecord } from './base';
import type { Project } from './project';
import type { Material } from './material';

export interface System extends BaseRecord {
  System_ID?: string;
  Project: Project;
  Annual_Output_kWh?: number;
  Offset?: number;
  kW_STC?: number;
  Price?: number;
  Is_Approved: boolean;
  Bill_of_Materials?: Material[];
}