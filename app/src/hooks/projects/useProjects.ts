import { 
  fetchKanbanProjects, 
  fetchProjectById,
  fetchProjectDetails,
  fetchKanbanStages,
  fetchKanbanTags 
} from '../../api/projects/queries';
import type { Project } from '../../types/project';
import type { Stage } from '../../types/stage';
import type { Tag } from '../../types/tag';

// Get useQuery from global ReactQuery after imports
const { useQuery } = ReactQuery;

// Fetch all projects for Kanban
export function useKanbanProjects() {
  return useQuery<Project[]>({
    queryKey: ['projects', 'kanban'],
    queryFn: () => fetchKanbanProjects()
  });
}

// Fetch single project
export function useProject(projectId: string) {
  return useQuery<Project>({
    queryKey: ['project', projectId],
    queryFn: () => fetchProjectById(projectId),
    enabled: !!projectId
  });
}

// Fetch project details with related records
export function useProjectDetails(projectId: string) {
  return useQuery<Project & {
    documents: any[];
    events: any[];
    notes: any[];
    issues: any[];
  }>({
    queryKey: ['project', projectId, 'details'],
    queryFn: () => fetchProjectDetails(projectId),
    enabled: !!projectId
  });
}

// Fetch stages for Kanban
export function useKanbanStages() {
  return useQuery<Stage[]>({
    queryKey: ['stages'],
    queryFn: () => fetchKanbanStages()
  });
}

// Fetch tags for Kanban
export function useKanbanTags() {
  return useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: () => fetchKanbanTags()
  });
}