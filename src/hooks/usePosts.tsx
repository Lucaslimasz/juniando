import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";
import { createContext, useContext, useEffect, useState } from "react";

interface PostsContextData {
  posts: IPosts[];
  categories: ICategories[];
}

interface ICategories {
  _id: string;
  name: string;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children }: any) {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    (async () => {
      const responsePosts = await api.get("/posts");
      const responseCategories = await api.get("/categories");
      setPosts(responsePosts.data);
      console.log(responsePosts.data);
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
