import type { BaseRecord } from './base';

export interface User extends BaseRecord {
  Name: {
    prefix?: "Mr." | "Mrs." | "Ms.";
    first_name: string;
    last_name: string;
    suffix?: string;
  };
  Email: string;
  Phone_Number?: string;
  Username: string;
  Role: "Admin" | "Project Manager" | "Designer" | "Installer";
}