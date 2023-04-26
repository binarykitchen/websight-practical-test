export enum UserRole {
  "Viewer" = "viewer",
  "Editor" = "editor",
}

export interface User {
  username: string;
  password: string;
  role: UserRole;
}
