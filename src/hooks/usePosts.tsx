import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface PostsContextData {
  posts: IPosts | undefined;
  categories: ICategories[];
  setPage: Dispatch<SetStateAction<number>>;
}

interface ICategories {
  _id: string;
  name: string;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<IPosts>();
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      const [responsePosts, responseCategories] = await Promise.all([
        api.get(`/posts?page=${page}&limit=10`),
        api.get("/categories"),
      ]);

      setPosts(responsePosts.data);
      setCategories(responseCategories.data);
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, categories, setPage }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);

  return ctx;
}
