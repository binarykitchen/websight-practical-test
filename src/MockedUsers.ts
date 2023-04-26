import { User, UserRole } from "./types";

const MockedUsers: User[] = [
  {
    username: "some.viewer",
    password: "ViewMeNow123!",
    role: UserRole.Viewer,
  },
  {
    username: "some.editor",
    password: "EditMeNow123!",
    role: UserRole.Editor,
  },
];

export default MockedUsers;
