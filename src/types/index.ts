export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  metrics: string[];
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Skill {
  title: string;
  icon: string;
  skills: string[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface ThemeProps {
  isDark: boolean;
}