import { BlogsType } from "@/types/blogs.type";
import { CategoriesType } from "@/types/categories.type";
import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOIT as string;

// Debug logging
console.log("Environment check:", {
  hasGraphAPI: !!graphAPI,
  graphAPI: graphAPI ? "Configured" : "Not configured",
  nodeEnv: process.env.NODE_ENV,
});

// Fallback data for when GraphQL is not available
const fallbackBlogs: BlogsType[] = [
  {
    id: "1",
    title: "Welcome to Our Blog",
    description: "This is a sample blog post to demonstrate the functionality.",
    slug: "welcome-to-our-blog",
    image: {
      url: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    },
    author: {
      name: "Admin",
      avatar: {
        url: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    category: [
      {
        label: "General",
        slug: "general",
      },
    ],
    statement: {
      html: "<p>This is a sample blog post content.</p>",
    },
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js development.",
    slug: "getting-started-with-nextjs",
    image: {
      url: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
    },
    author: {
      name: "Developer",
      avatar: {
        url: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    },
    category: [
      {
        label: "Technology",
        slug: "technology",
      },
    ],
    statement: {
      html: "<p>Learn the basics of Next.js development in this comprehensive guide.</p>",
    },
    createdAt: new Date(),
  },
];

const fallbackCategories: CategoriesType[] = [
  {
    slug: "general",
    label: "General",
  },
  {
    slug: "technology",
    label: "Technology",
  },
];

const BlogsService = {
  getAllBlogs: async (): Promise<BlogsType[]> => {
    try {
      if (!graphAPI) {
        return fallbackBlogs;
      }

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
            statement {
              html
            }
            createdAt
          }
        }
      `;
      const result = await request<{ blogs: BlogsType[] }>(graphAPI, query);

      return result.blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      console.warn("Using fallback data due to error");
      return fallbackBlogs;
    }
  },

  getCategories: async (): Promise<CategoriesType[]> => {
    try {
      if (!graphAPI) {
        return fallbackCategories;
      }

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
    } catch (error) {
      console.error("Error fetching categories:", error);
      console.warn("Using fallback data due to error");
      return fallbackCategories;
    }
  },

  getDetailedBlogs: async (slug: string) => {
    try {
      if (!graphAPI) {
        return null;
      }

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
            category {
              label
              slug
            }
          }
        }
      `;

      const result = await request<{ blog: BlogsType }>(graphAPI, query, {
        slug,
      });
      return result.blog;
    } catch (error) {
      console.error("Error fetching detailed blog:", error);
      return null;
    }
  },

  getDetailedCategory: async (slug: string) => {
    try {
      if (!graphAPI) {
        return null;
      }

      const query = gql`
        query getBlogsByCategory($slug: String!) {
          blogs(where: { category: { slug: $slug } }) {
            title
            slug
            id
            description
            author {
              name
              avatar {
                url
              }
            }
            category {
              slug
              label
            }
            image {
              url
            }
            statement {
              html
            }
            createdAt
          }
        }
      `;
      const result = await request<{ blogs: BlogsType[] }>(graphAPI, query, {
        slug,
      });

      return result.blogs;
    } catch (error) {
      console.error("Error fetching detailed category:", error);
      return null;
    }
  },

  getBlogsByCategory: async (slug: string) => {
    try {
      if (!graphAPI) {
        return fallbackBlogs.filter((blog) => blog.category[0]?.slug === slug);
      }

      const query = gql`
        query GetBlogsByCategory($slug: String!) {
          category(where: { slug: $slug }) {
            blog {
              id
              image {
                url
              }
              title
              description
              author {
                name
                avatar {
                  url
                }
              }
              slug
              createdAt
              category {
                label
                slug
              }
              statement {
                html
              }
            }
          }
        }
      `;

      const result = await request<{ category: { blog: BlogsType[] } }>(
        graphAPI,
        query,
        {
          slug,
        }
      );

      return result.category?.blog || [];
    } catch (error) {
      console.error("Error fetching blogs by category:", error);
      console.warn("Using fallback data due to error");
      return fallbackBlogs.filter((blog) => blog.category[0]?.slug === slug);
    }
  },
};

export default BlogsService;
