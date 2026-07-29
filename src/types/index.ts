export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  image: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Stat = {
  value: string;
  label: string;
};
