import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

export default function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS);

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <NewUserForm />
    </div>
  );
}
