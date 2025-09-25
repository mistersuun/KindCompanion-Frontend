export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  preferences: UserPreferences;
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface UserProfile {
  phone?: string;
  address?: Address;
  emergencyContact?: EmergencyContact;
  accessibilityNeeds?: AccessibilityNeeds;
  languages: Language[];
  timezone: string;
}

export interface UserPreferences {
  language: Language;
  theme: Theme;
  fontSize: FontSize;
  highContrast: boolean;
  reducedMotion: boolean;
  notifications: NotificationSettings;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

export interface AccessibilityNeeds {
  mobilityAid?: string[];
  visualImpairment?: boolean;
  hearingImpairment?: boolean;
  cognitiveSupport?: boolean;
  medicationReminders?: boolean;
  specialInstructions?: string;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  appointmentReminders: boolean;
  emergencyAlerts: boolean;
}

export enum UserRole {
  CLIENT = 'client',
  FAMILY_MEMBER = 'family_member',
  COMPANION = 'companion',
  ADMIN = 'admin',
  STAFF = 'staff'
}

export enum Language {
  EN = 'en',
  FR = 'fr'
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  HIGH_CONTRAST = 'high-contrast'
}

export enum FontSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extra-large'
}