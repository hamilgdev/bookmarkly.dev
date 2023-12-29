
export interface TedBy {
  object: string;
  id: string;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Category {
}

export interface Properties {
  url: Category;
  summary: Category;
  category: Category;
  tags: Category;
  name: Category;
}

export interface Bookmark {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  cover: null;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: null;
}

export interface Bookmarkly {
  name: string;
  url: string;
  summary: string;
  category: string;
  tags: string[];
}
