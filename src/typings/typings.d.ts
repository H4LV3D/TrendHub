type Blog = {
  title: string;
  episode?: string;
  description?: string;
  readTime: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string | number;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};
