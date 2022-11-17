export interface Entry {
    id: number;
    attributes: {
      Slug: string | null;
      blogContent: {
        id: number;
        __component: string;
        content: string;
      }[];
      createdAt: string;
      updatedAt: string | null;
      title: string;
      subline: string | null;
    };
  }