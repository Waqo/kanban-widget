import type { BaseRecord } from './base';
import type { Project } from './project';

export interface Installation_Booking_Customer_Form extends BaseRecord {
  Project?: Project;
  Customer_Name: string;
  Customer_Email: string;
  Customer_Phone: string;
  Installation_Date: string;
  Special_Instructions?: string;
  Status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
}