import { API_CONFIG, fetchPaginatedRecords, fetchRecordById } from '../zohoApi';
import type { Project } from '../../types/project';
import type { Stage } from '../../types/stage';
import type { Tag } from '../../types/tag';

// ======================
// Project Queries
// ======================
export async function fetchKanbanProjects(): Promise<Project[]> {
  return fetchPaginatedRecords<Project>(API_CONFIG.reports.projects);
}

export async function fetchProjectById(projectId: string): Promise<Project> {
  return fetchRecordById<Project>(API_CONFIG.reports.projects, projectId);
}

// ======================
// Project Details Query
// ======================
export async function fetchProjectDetails(projectId: string) {
  const project = await fetchRecordById<Project>(
    API_CONFIG.reports.projects, 
    projectId
  );

  const [documents, events, notes, issues] = await Promise.all([
    fetchPaginatedRecords(API_CONFIG.reports.documents, `Project == ${projectId}`),
    fetchPaginatedRecords(API_CONFIG.reports.events, `Project == ${projectId}`),
    fetchPaginatedRecords(API_CONFIG.reports.notes, `Project == ${projectId}`),
    fetchPaginatedRecords(API_CONFIG.reports.issues, `Project == ${projectId}`)
  ]);

  return {
    ...project,
    documents,
    events,
    notes,
    issues
  };
}

// ======================
// Related Data Queries
// ======================
export async function fetchKanbanStages(): Promise<Stage[]> {
  return fetchPaginatedRecords<Stage>(API_CONFIG.reports.stages);
}

export async function fetchKanbanTags(): Promise<Tag[]> {
  return fetchPaginatedRecords<Tag>(API_CONFIG.reports.tags);
}