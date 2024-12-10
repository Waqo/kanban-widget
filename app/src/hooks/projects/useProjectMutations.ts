import { 
  createProject, 
  createProjectWithFile,
  updateProject,
  updateProjectStage,
  updateProjectTags,
} from '../../api/projects/mutations';
import type { Project } from '../../types/project';
import type { ZohoAPIError } from '../../api/types';

const { useMutation, useQueryClient } = ReactQuery;

export function useCreateProject() {
  const queryClient = useQueryClient();
  
  return useMutation<Project, ZohoAPIError, Partial<Project>>({
    mutationFn: (data) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useCreateProjectWithFile() {
  const queryClient = useQueryClient();
  
  return useMutation<
    Project, 
    ZohoAPIError, 
    { data: Partial<Project>; file: File; fieldName: string }
  >({
    mutationFn: ({ data, file, fieldName }) => 
      createProjectWithFile(data, file, fieldName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useUpdateProjectStage() {
  const queryClient = useQueryClient();
  
  return useMutation<
    Project,
    ZohoAPIError,
    { projectId: string; stageId: string }
  >({
    mutationFn: ({ projectId, stageId }) => 
      updateProjectStage(projectId, stageId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useUpdateProjectTags() {
  const queryClient = useQueryClient();
  
  return useMutation<
    Project,
    ZohoAPIError,
    { projectId: string; tagIds: string[] }
  >({
    mutationFn: ({ projectId, tagIds }) => 
      updateProjectTags(projectId, tagIds),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  
  return useMutation<
    Project,
    ZohoAPIError,
    { projectId: string; data: Partial<Project> }
  >({
    mutationFn: ({ projectId, data }) => 
      updateProject(projectId, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}
