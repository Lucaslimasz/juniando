export interface IPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
  category: string;
  viewQuantity: number;
}

export interface IPosts {
  posts: IPost[];
  currentPage: number;
  totalPages: number;
}
