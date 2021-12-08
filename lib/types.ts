export interface UserInfoType {
  id: string;
  name: string;
  email: string;
  image: string;
}
export interface CommentType {
  id: string;
  user: UserInfoType;
  text: string;
  created_at: string;
}

export interface BlogPostInfoType {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  hasCode?: boolean;
}
