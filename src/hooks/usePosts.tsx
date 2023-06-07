import { api } from "@config/api";
import { IPost, IPosts } from "@interfaces/posts";
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
  updatedViewsCount(id: string): void;
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

  const updatedViewsCount = async (slug: string) => {
    const { data } = await api.get<IPost>(`/posts/content/${slug}`);
    console.log(data);
    return await api.put(`/posts/${data._id}`, {
      viewQuantity: data.viewQuantity + 1,
    });
  };

  return (
    <PostsContext.Provider
      value={{ posts, categories, updatedViewsCount, setPage }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);

  return ctx;
}
