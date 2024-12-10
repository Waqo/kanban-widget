import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Issue extends BaseRecord {
  Issue: string;
  Author: string;
  Is_Resolved: boolean;
  Project: Project;
}