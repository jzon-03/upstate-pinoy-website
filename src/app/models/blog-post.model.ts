export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;

  author: string;

  featuredImage?: string;
  category?: string;
  tags?: string[];

  published: boolean;
  publishedDate?: Date;
  createdDate: Date;
  updatedDate?: Date;

  views?: number;
}