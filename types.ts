export interface Documentary {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  tags: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}