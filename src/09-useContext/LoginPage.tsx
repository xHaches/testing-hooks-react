import { useContext } from "react"

import { User, UserContext } from './context/UserContext';

export const LoginPage = () => {

  const { email, id, name, setUser } = useContext<User>(UserContext);

  const handleSetUser = () => {
    setUser?.({
      name: 'Luis',
      email: 'test@test.com',
      id: '2',
    })
  }

  return (
    <>
      <h1>LoginPage <small>{ name }</small></h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify({email, id, name}, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={handleSetUser}>
        Set user
      </button>

    </>
  )
}
  