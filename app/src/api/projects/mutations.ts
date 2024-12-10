import { 
    API_CONFIG, 
    addRecord, 
    updateRecord, 
    deleteRecord,
    createRecordWithFile 
  } from '../zohoApi';
  import type { Project } from '../../types/project';
  
  // ======================
  // Create Operations
  // ======================
  export async function createProject(data: Partial<Project>) {
    return addRecord<Project>('PM_Kanban_Projects_Form', data);
  }
  
  export async function createProjectWithFile(
    data: Partial<Project>,
    file: File,
    fieldName: string
  ) {
    return createRecordWithFile<Project>(
      API_CONFIG.reports.projects,
      'PM_Kanban_Projects_Form',
      data,
      fieldName,
      file
    );
  }
  
  // ======================
  // Update Operations
  // ======================
  export async function updateProjectStage(
    projectId: string, 
    stageId: string
  ) {
    return updateRecord<Project>(
      API_CONFIG.reports.projects,
      projectId,
      { New_Stage: stageId }
    );
  }
  
  export async function updateProjectTags(
    projectId: string,
    tagIds: string[]
  ) {
    return updateRecord<Project>(
      API_CONFIG.reports.projects,
      projectId,
      { Tags: tagIds }
    );
  }
  
  export async function updateProject(
    projectId: string,
    data: Partial<Project>
  ) {
    return updateRecord<Project>(
      API_CONFIG.reports.projects,
      projectId,
      data
    );
  }
  
  // ======================
  // Delete Operations
  // ======================
  export async function deleteProject(projectId: string) {
    return deleteRecord(API_CONFIG.reports.projects, projectId);
  }