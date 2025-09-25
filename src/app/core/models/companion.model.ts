import { User } from './user.model';

export interface Companion extends User {
  companionProfile: CompanionProfile;
  availability: Availability[];
  certifications: Certification[];
  specialties: Specialty[];
  languages: string[];
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  backgroundCheckDate: Date;
  insuranceExpiryDate: Date;
}

export interface CompanionProfile {
  bio: string;
  experience: number; // years
  education: string;
  interests: string[];
  personalityTraits: string[];
  photo: string;
  hourlyRate: number;
  travelRadius: number; // kilometers
  providesTransportation: boolean;
  petFriendly: boolean;
}

export interface Availability {
  dayOfWeek: DayOfWeek;
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  isRecurring: boolean;
  exceptions?: DateException[];
}

export interface DateException {
  date: Date;
  isAvailable: boolean;
  reason?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: Date;
  expiryDate?: Date;
  certificateUrl?: string;
  verified: boolean;
}

export interface Specialty {
  id: string;
  name: string;
  category: SpecialtyCategory;
  description: string;
  certified: boolean;
}

export interface CompanionMatch {
  companionId: string;
  clientId: string;
  matchScore: number;
  reasons: MatchReason[];
  preferenceAlignment: PreferenceAlignment;
  availability: boolean;
}

export interface MatchReason {
  category: string;
  description: string;
  weight: number;
}

export interface PreferenceAlignment {
  personality: number; // 0-1 score
  interests: number; // 0-1 score
  schedule: number; // 0-1 score
  location: number; // 0-1 score
  language: number; // 0-1 score
  overall: number; // 0-1 score
}

export enum DayOfWeek {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
  SATURDAY = 5,
  SUNDAY = 6
}

export enum SpecialtyCategory {
  MEDICAL_SUPPORT = 'medical_support',
  MOBILITY_ASSISTANCE = 'mobility_assistance',
  COGNITIVE_SUPPORT = 'cognitive_support',
  SOCIAL_ACTIVITIES = 'social_activities',
  HOUSEHOLD_TASKS = 'household_tasks',
  TRANSPORTATION = 'transportation',
  TECHNOLOGY_HELP = 'technology_help',
  EMOTIONAL_SUPPORT = 'emotional_support'
}

export enum CompanionStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ON_LEAVE = 'on_leave',
  PENDING_APPROVAL = 'pending_approval',
  SUSPENDED = 'suspended'
}