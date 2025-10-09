export type BlogsType = {
  id: string;
  image: {
    url: string;
  };
  title: string;
  description: string;
  slug: string;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
  createdAt: Date;
};
