import type { BaseRecord } from './base.d.ts';
import type { Stage } from './stage.d.ts';
import type { Tag } from './tag.d.ts';
import type { Contact } from './contact.d.ts';
import type { Document } from './document.d.ts';
import type { Event } from './event.d.ts';
import type { Installation_Booking_Customer_Form } from './installation-booking.d.ts';
import type { Installation_Crew } from './installation-crew.d.ts';

export interface Project extends BaseRecord {
  // Site Survey Booking Form Info
  Customer_Name?: string;
  Customer_Email?: string;
  Customer_Contact_Number?: string;
  Customer_Address?: {
    address_line_1: string;
    address_line_2?: string;
    district_city: string;
    state_province: string;
    postal_Code: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
  Salesperson_Last_Name?: string;
  Has_Customer_Provided_Electric_Bill?: "Yes" | "No";
  OS_Project_ID?: string;

  // Development
  Street_Address?: string;

  // Installation Booking Form
  Installation_Booking_Customer_Form?: Installation_Booking_Customer_Form;
  Installation_Crew?: Installation_Crew;

  // Basic Project Info
  Project_ID: number;
  Street_View_Image?: string;
  Is_Demo: boolean;
  Need_Help: boolean;
  Created_Date: string;

  // Stage & OpenSolar Info
  Stage?: string;
  New_Stage?: Stage;
  OpenSolar_Stage?: "New" | 
                    "Proposal Design" | 
                    "Close Sale" | 
                    "Post Sale" | 
                    "Installing" | 
                    "Maintaining" | 
                    "Other" | 
                    "Lost";
  OpenSolar_Project_ID?: number;

  // Site Information
  Site_Address: {
    address_line_1: string;
    address_line_2?: string;
    district_city: string;
    state_province: string;
    postal_Code: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };

  // Project Status
  Is_Sold: boolean;
  Date_Sold?: string;
  On_MD_Feeder_Map: boolean;
  Commercial: boolean;
  NEM_or_CREF: "NEM" | "CREF" | "TBD" | "Need Help";
  Payment_Option?: string;

  // Related Records
  Tags?: Tag[];
  Owner_Name?: Contact;
  Contacts1?: Contact[];
  Events?: Event[];
  Documents?: Document[];

  // Additional Fields
  Business_Name?: string;
  Sales_Rep?: string;
  Sales_Org?: string;
  Property_Database_Ownership_Info?: string;
  Ready_for_Inves?: "Yes" | "No";
  Project_Folder_Link?: string;
  Project_Folder_ID?: string;
  Project_Investor_Folder_Link?: string;
  Project_Investor_Folder_Id?: string;
  Utility_Bill_Folder_Link?: string;
  Utility_Bill_Folder_ID?: string;
  Utility_Account_Number_Received: boolean;
  Created_On: string;
  OpenSolar_Link?: string;
  OpenSolar_Proposal_Link?: string;
  Owning_Company_LLC?: Contact[];
  Initial_Annual_Usage_Value?: string;
  Annual_Usage?: number;
  SSL?: string;
  Number_of_Storeys?: number;
  Number_of_Phases?: "1" | "3";
  Lease_per_kW?: string;
  Finance_Status?: "Pre-Approved" | "Agreement Sent" | "Signed" | "NTP" | "N/A";
  Finance_Company?: "N/A" | "Mosaic" | "Cash" | "Sungage";

  // Notification Dates
  Info_for_Contract_Email_Sent?: string;
  Closed_Sale_Email_Sent?: string;
  Utility_Bill_Request_Stage_Based_Email?: string;
  Finance_Info_Request_Email?: string;
  Survey_Report_Email_Sent?: string;
  Permit_Interconnection_Email_Sent?: string;
  Second_Permit_Interconnection_Email_Sent?: string;
  Third_Permit_Interconnection_Email_Sent?: string;
  Installation_Email_Sent?: string;
  Installation_Complete_Email_Sent?: string;
  PTO_Email_Sent?: string;
}
