export type Level = '11plus' | 'gcse' | 'alevel';
export type ResourceType = 'pdf' | 'video' | 'quiz' | 'note' | 'link';
export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
}

export interface Subject {
  id: string;
  name: string;
  level: Level;
  description: string;
}

export interface Topic {
  id: string;
  subject_id: string;
  name: string;
  description: string;
  order_index: number;
}

export interface Resource {
  id: string;
  topic_id: string;
  title: string;
  type: ResourceType;
  url?: string;
  content?: string;
}

export interface StudyPlan {
  id: string;
  user_id: string;
  name: string;
  target_date: string;
}

export interface PlanItem {
  id: string;
  plan_id: string;
  topic_id: string;
  scheduled_date: string;
  duration_mins: number;
  completed: boolean;
  notes?: string;
}