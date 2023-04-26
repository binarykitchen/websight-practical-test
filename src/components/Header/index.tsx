/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.scss";

import { User } from "../../types";
import logo from "../../vectors/logo.svg";

interface HeaderProps {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const Header = (props: HeaderProps) => {
  const { user, setUser } = props;

  const logout = () => {
    setUser(undefined);
  };

  return (
    <header>
      <div className="left">
        {user && (
          <p className="username">
            Hello {user.username} ({user.role.toUpperCase()})
          </p>
        )}
      </div>
      <h1>
        <img src={logo} alt="logo" />
        Websight Practical Test by{" "}
        <a href="https://binarykitchen.com" target="_blank" rel="noopener noreferrer">
          Michael Heuberger
        </a>
      </h1>
      <div className="right">
        {user && (
          <p className="logoutLink">
            <a href="#" onClick={logout}>
              Logout
            </a>
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
