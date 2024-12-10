import { API_CONFIG, fetchRecordById, fetchPaginatedRecords } from '../zohoApi';
import type { Project } from '../../types/project';

export async function fetchProjectDetails(projectId: string) {
  const project = await fetchRecordById<Project>(
    API_CONFIG.reports.projects, 
    projectId
  );

  // Fetch associated records
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