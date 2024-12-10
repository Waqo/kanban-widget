import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Permitting extends BaseRecord {
  Project: Project;
  Tags?: ("Canceled Permit" | "Waiting for Bill or Relationship Letter" | "Completed Contract W/ Updates")[];
  Problem?: "Proceed to Submit" | "No Site Survey" | "No Designs" | "No Bill" | 
           "No Relationship Letter" | "Reqd Load Calculator" | "Waiting on Signature";
  
  // Permit Section
  Permit_Submitted?: "No" | "Yes" | "I Don't Know";
  Permit_Status: "Not Submitted" | "Project Docs Accepted" | "In Review" | "Approved" | "Problem";
  Permit_Number?: string;
  Permit_Submission_Date?: string;
  Permit_Approval_Date?: string;

  // Interconnection Section
  Interconnection_Submitted?: "No" | "Yes" | "I Don't Know";
  Interconnection_Status: "Not Submitted" | "Submitted" | "Resubmitted" | "Approval to Install" |
                         "Field Verification" | "Technical Review" | "Upgrades Rqd: Approval" |
                         "Technical Review Completed" | "More Info Rqd" | "Incomplete" | "Moved to Revised";
  Interconnection_Number?: string;
  Interconnection_Submission_Date?: string;
  Interconnection_Approval_Date?: string;
}