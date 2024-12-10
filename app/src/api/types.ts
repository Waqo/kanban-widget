// Base Zoho API types
export interface ZohoResponse<T> {
    code: number;
    message?: string;
    data: T[];
  }
  
  export interface ZohoSingleResponse<T> {
    code: number;
    message?: string;
    data: T;
  }
  
  // API Configuration types
  export interface APIConfig {
    appName: string;
    reports: {
      [key: string]: string;
    };
    pageSize: number;
  }
  
  // Common field types from Zoho
  export interface ZohoAddress {
    address_line_1: string;
    address_line_2?: string;
    district_city: string;
    state_province: string;
    postal_code: string;
    country: string;
    latitude?: string;
    longitude?: string;
    display_value: string;
  }
  
  export interface ZohoName {
    first_name: string;
    last_name: string;
    display_value: string;
  }
  
  export interface ZohoLookup {
    ID: string;
    display_value: string;
  }