import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface IPostsProvider {
  children: ReactNode;
}

interface PostsContextData {
  posts: IPosts[];
  tag: string;
  handleTag(title: string): void;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: IPostsProvider) {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [tag, setTag] = useState<string>("");

  const handleTag = (title: string) => {
    setTag(title);
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/63d734ddace6f33a22cdac20");
      setPosts(data.record.posts);
      setTag(data.record.posts[0].tag);
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, tag, handleTag }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);

  return ctx;
}
