import "./styles.scss";

import { FormEvent, useEffect, useState } from "react";

import { User } from "../../types";
import {
  containsLowercase,
  containsSpecialChars,
  containsUppercase,
  getUser,
} from "./helpers";

const USERNAME_ID = "username";
const PASSWORD_ID = "password";

const MIN_PASSWORD_LENGTH = 8;

interface LoginFormProps {
  setUser: (user: User) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { setUser } = props;

  // Store any validation errors in here
  const [usernameError, setUsernameError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

  // Controlled form input values
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const valid =
    usernameError === undefined && passwordError === undefined && username && password;

  useEffect(() => {
    if (username === undefined) return; // not dirty yet

    if (username.length < 1) {
      setUsernameError("The username cannot be empty");
    } else {
      setUsernameError(undefined);
    }
  }, [username]);

  useEffect(() => {
    if (password === undefined) return;

    if (password.length < 1) {
      setPasswordError("The password cannot be empty");
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(
        `The password must have at least ${MIN_PASSWORD_LENGTH} characters`
      );
    } else if (!containsUppercase(password)) {
      setPasswordError("The password must have at least one uppercase character");
    } else if (!containsLowercase(password)) {
      setPasswordError("The password must have at least one lowercase character");
    } else if (!containsSpecialChars(password)) {
      setPasswordError("The password must have at least one special character character");
    } else {
      setPasswordError(undefined);
    }
  }, [password]);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Shouldn't happen but be safe
    if (!valid) return;

    const user = getUser(username);

    if (!user) {
      return setUsernameError("There is no user with this username");
    } else if (user.password !== password) {
      return setPasswordError("Invalid password, try again");
    }

    setUser(user);
  };

  return (
    <section id="login-page">
      <h2>Login</h2>
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            autoFocus
            type="text"
            id={USERNAME_ID}
            name={USERNAME_ID}
            value={username || ""}
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
            className={usernameError ? "invalid" : "valid"}
          />
          <p className="error-message">{usernameError}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id={PASSWORD_ID}
            name={PASSWORD_ID}
            value={password || ""}
            placeholder="Enter password"
            minLength={8}
            onChange={(event) => setPassword(event.target.value)}
            className={passwordError ? "invalid" : "valid"}
          />
          <p className="error-message">{passwordError}</p>
        </div>

        <button disabled={!valid} id="login" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
