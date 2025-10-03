export type MilestoneColor = 
  | "primary" 
  | "purple" 
  | "green" 
  | "teal" 
  | "red" 
  | "yellow";

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
  image?: string;
  imageHeight?: number;
  link?: string;
  color: MilestoneColor;
  position?: "left" | "right";
}

export interface TimelineYear {
  year: number;
  milestones: Milestone[];
}

export interface Article {
  id: string;
  title: string;
  topic: string;
  date: string;
  author: string;
  authorRole: string;
  color: string;
  link: string;
}