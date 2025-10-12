import { BlogsType } from "@/types/blogs.type";
import { CategoriesType } from "@/types/categories.type";
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

  getCategories: async (): Promise<CategoriesType[]> => {
    const query = gql`
      query GetCategories {
        categories {
          slug
          label
        }
      }
    `;
    const result = await request<{ categories: CategoriesType[] }>(
      graphAPI,
      query
    );
    return result.categories;
  },

  getDetailedBlogs: async (slug: string) => {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          title
          slug
          id
          image {
            url
          }

          statement {
            html
          }
          description
          createdAt
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await request<{ blog: BlogsType }>(graphAPI, query, {
      slug,
    });
    return result.blog;
  },
};

export default BlogsService;
