import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface PostsContextData {
  posts: IPosts[];
  categories: ICategories[];
}

interface ICategories {
  _id: string;
  name: string;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    (async () => {
      const [responsePosts, responseCategories] = await Promise.all([
        api.get("/posts"),
        api.get("/categories"),
      ]);
      setPosts(responsePosts.data);
      setCategories(responseCategories.data);
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, categories }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);

  return ctx;
}
