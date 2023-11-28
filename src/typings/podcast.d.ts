export type Podcast = {
  title: string;
  episode?: string;
  description?: string;
  duration: string;
  date: string;
  link: string;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};
