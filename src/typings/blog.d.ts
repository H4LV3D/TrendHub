export type Blog = {
  title: string;
  episode?: string;
  description?: string;
  duration: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};
