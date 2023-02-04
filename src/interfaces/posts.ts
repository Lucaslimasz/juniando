export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface IPosts {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
  category: string;
}
