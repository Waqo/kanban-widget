import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Material extends BaseRecord {
  Activation_ID?: string;
  Model?: string;
  Manufacturer?: string;
  Category?: string;
  Quantity?: number;
  Total_Price?: number;
  Project?: Project;
  System?: {
    ID: string;
    display_value: string;
  };
}