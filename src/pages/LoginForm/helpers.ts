import MockedUsers from "../../MockedUsers";

function containsLowercase(string: string) {
  return /[a-z]/.test(string);
}

function containsUppercase(string: string) {
  return /[A-Z]/.test(string);
}

function containsSpecialChars(string: string) {
  return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(string);
}

function getUser(username: string) {
  return MockedUsers.find((mockedUser) => mockedUser.username === username);
}

export { containsLowercase, containsSpecialChars, containsUppercase, getUser };
