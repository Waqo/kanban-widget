import type { BaseRecord } from './base';
import type { Project } from './project';
import type { Contact } from './contact';

export interface Event extends BaseRecord {
  // Basic Event Information
  Title: string;
  Booking_Type: 
    | "Site Survey Booking" 
    | "Installation Booking" 
    | "Inspection Booking" 
    | "Roof Work Booking" 
    | "Panel Upgrade Booking" 
    | "Tree Work Booking";

  // Timing
  Start_Time: string;
  End_Time?: string;
  Duration?: number;

  // Event Details
  Booking_Details?: string;
  Booking_ID?: string;
  Created_By?: string;
  Status?: "Scheduled" | "Completed" | "Cancelled" | "Rescheduled";
  
  // Location
  Location?: {
    address_line_1: string;
    address_line_2?: string;
    district_city: string;
    state_province: string;
    postal_Code: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };

  // Related Records
  Project?: Project;
  Assigned_To?: Contact[];
  Customer_Contact?: Contact;

  // Additional Fields
  Notes?: string;
  Confirmation_Sent?: boolean;
  Reminder_Sent?: boolean;
  Calendar_Event_ID?: string;
}
