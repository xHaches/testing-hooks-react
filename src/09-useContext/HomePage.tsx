import { useContext } from "react";
import { User, UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { email, id, name } = useContext<User>(UserContext);

  return (
      <>
          <h1>HomePage</h1>
          <hr />
          <pre aria-label="pre">
            {JSON.stringify({email, id, name}, null, 3)}
          </pre>
      </>
    )
  }
  