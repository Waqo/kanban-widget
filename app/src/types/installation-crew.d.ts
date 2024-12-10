import type { BaseRecord } from './base';
import type { Contact } from './contact';

export interface Installation_Crew extends BaseRecord {
  Crew_Name: string;
  Crew_Leader: Contact;
  Crew_Members?: Contact[];
  Active_Status: boolean;
  Availability_Status: "Available" | "Assigned" | "Unavailable";
}