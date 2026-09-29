export interface Project {
  id: string;
  name: string;
  category: string;
  isFeatured?: boolean;
  description: string;
  technologies: string[];
  whatILearned: string[];
  whyIBuiltIt?: string;
  githubUrl?: string;
  keyFeatures?: string[];
  hasInteractiveDemo?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundations' | 'Active Practice' | 'Exploring' | 'Core Focus';
    note?: string;
  }[];
}

export interface JourneyStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  status: 'Completed' | 'Current Focus' | 'Next Step' | 'Long-term Goal';
}

export interface ExploringTopic {
  title: string;
  description: string;
  topics: string[];
  whyImportant: string;
}
