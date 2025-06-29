import { blogAPIClient } from "../blogAPIClient";
import { BLOG_QUERY_KEYS } from "./keys";

 

export const BLOG_QUERIES = {
  getBlogs: {
    queryKey: BLOG_QUERY_KEYS.list(),
    queryFn: blogAPIClient.getBlogs,
  },
};