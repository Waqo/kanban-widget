import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Contact extends BaseRecord {
  // Name Information
  Name: {
    first_name: string;
    last_name: string;
    prefix?: "Mr." | "Mrs." | "Ms.";
    suffix?: string;
  };

  // Contact Types
  Primary_Contact_Type1: 
    | "Owner 1" 
    | "Owner 2" 
    | "Other Project Contact" 
    | "Salesperson" 
    | "Admin" 
    | "Sales Manager" 
    | "Project Coordinator" 
    | "Site Surveyor" 
    | "Permit/Interconnect Expediter" 
    | "Project Manager" 
    | "Crew Leader" 
    | "Installer" 
    | "Subcontractor" 
    | "Lead Generator/Referer" 
    | "Site Designer" 
    | "Distributor POC" 
    | "3rd Party Inspector" 
    | "Investor" 
    | "Master Electrician";

  Secondary_Contact_Type?: Contact['Primary_Contact_Type1'];

  // Contact Information
  Email: string;
  Phone_Number?: string;
  Mobile_Phone_Number?: string;

  // OpenSolar Integration
  OpenSolar_ID?: number;

  // Business Information
  Business_POC: boolean;

  // Related Records
  Project?: Project[];  // Bidirectional relationship with Project
}
