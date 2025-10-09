import { BlogsType } from "@/types/blogs.type";
import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOIT as string;

const BlogsService = {
  getAllBlogs: async (): Promise<BlogsType[]> => {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          image {
            url
          }
          title
          description
          slug
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphAPI, query);
    return result.blogs;
  },
};

export default BlogsService;
