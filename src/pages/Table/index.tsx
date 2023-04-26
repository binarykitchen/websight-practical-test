import "./styles.scss";

import { User } from "../../types";

interface TableProps {
  user: User;
}

const Table = (props: TableProps) => {
  return (
    <section id="table-page">
      <table>
        <thead>
          <tr>
            <th>
              <button>Name</button>
            </th>
            <th>
              <button>Type</button>
            </th>
            <th>
              <button>HP</button>
            </th>
            <th>
              <button>Attack</button>
            </th>
            <th>
              <button>Defense</button>
            </th>
            <th>
              <button>Sp. Attack</button>
            </th>
            <th>
              <button>Sp. Defense</button>
            </th>
            <th>
              <button>Speed</button>
            </th>
            <th>
              <button>Total</button>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <h1>Sorry, it is incomplete. My time is up.</h1>
    </section>
  );
};

export default Table;
