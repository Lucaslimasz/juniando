import { api } from "@config/api";
import { IPosts } from "@interfaces/posts";
import Cookie from "js-cookie";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

// interface IPostsProvider {
//   currentPosts: IPosts[];
//   children: ReactNode;
// }

interface PostsContextData {
  posts: IPosts[];
  categories: ICategories[];
}

interface ICategories {
  _id: string;
  name: string;
}

const PostsContext = createContext({} as PostsContextData);

export function PostsProvider({ children, currentPosts }: any) {
  const [posts, setPosts] = useState<IPosts[]>(currentPosts);
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    (async () => {
      const token = Cookie.get("token-user");
      const responsePosts = await api.get("/posts", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const responseCategories = await api.get("/categories", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
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
