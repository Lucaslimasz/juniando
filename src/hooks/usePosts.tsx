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
  updatedViewsCount(id: string): void;
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

  const updatedViewsCount = async (id: string) => {
    const { data } = await api.get<IPosts>(`/posts/content/${id}`);
    return await api.put(`/posts/${id}`, {
      viewQuantity: data.viewQuantity + 1,
    });
  };

  return (
    <PostsContext.Provider value={{ posts, categories, updatedViewsCount }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);

  return ctx;
}
