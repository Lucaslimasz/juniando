export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface IPosts {
  id: number;
  tag: string;
  posts: IPost[];
}
