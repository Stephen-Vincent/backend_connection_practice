import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      // get -> promise -> response /error
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/xusers"
      );
      // .then((res) => setUsers(res.data))
      // .catch((err) => setError(err.message));
    };
  }, []);

  return (
    <div className="app">
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
