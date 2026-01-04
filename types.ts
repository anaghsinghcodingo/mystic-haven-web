
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
  growth: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
