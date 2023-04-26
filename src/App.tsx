import { useState } from "react";

import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import Table from "./pages/Table";
import { User } from "./types";

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  // Ideally I would handle this with Redux and reselect
  const renderPage = () => {
    if (user) {
      return <Table user={user} />;
    }

    return <LoginForm setUser={setUser} />;
  };

  return (
    <>
      <Header user={user} setUser={setUser} />
      <main>{renderPage()}</main>
    </>
  );
}

export default App;
