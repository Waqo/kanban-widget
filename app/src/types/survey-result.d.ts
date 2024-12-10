import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Survey_Result extends BaseRecord {
  Is_Demo: boolean;
  SiteCapture_ID?: string;
  Street_Address?: string;
  City_State_ZIP?: string;
  Homeowner_Name?: string;
  Homeowner_Email?: string;
  Homeowner_Phone?: string;
  Assessment_Date?: string;
  Roof_Type?: string;
  Roof_Condition?: string;
  Main_Service_Panel_Size?: string;
  Tree_Trimming_Required: string;
  OpenSolar_Project_ID?: string;
  Ready: boolean;
  Projectt: Project;  // Note: Typo in form field name
  Report_PDF_ID?: string;
  Image_ZIP_ID?: string;
  
  // Summary Fields
  Tree_Work_Required?: string;
  Roof_Work_Required?: string;
  Panel_Upgrade_Required?: string;
}