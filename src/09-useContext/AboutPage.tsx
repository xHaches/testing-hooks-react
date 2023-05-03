import { useContext } from "react";
import { User, UserContext } from "./context/UserContext";

export const AboutPage = () => {
    const { email, id, name } = useContext<User>(UserContext);
    return (
      <>
          <h1>AboutPage</h1>
          <hr />
          <pre>
            {JSON.stringify({email, id, name}, null, 3)}
          </pre>
      </>
    )
  }
  