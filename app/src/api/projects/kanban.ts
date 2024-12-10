import { API_CONFIG, fetchPaginatedRecords } from '../zohoApi';
import type { Project } from '../../types/project';

export async function fetchKanbanProjects(): Promise<Project[]> {
  return fetchPaginatedRecords<Project>(API_CONFIG.reports.projects);
}

export async function fetchKanbanStages() {
  return fetchPaginatedRecords(API_CONFIG.reports.stages);
}

export async function fetchKanbanTags() {
  return fetchPaginatedRecords(API_CONFIG.reports.tags);
}