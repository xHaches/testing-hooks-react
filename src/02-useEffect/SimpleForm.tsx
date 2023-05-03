import { ChangeEvent, useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Luis',
    email: 'test@test.com'
  });

  const { username, email } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
     setFormState({
      ...formState, [name]: value
     })
  }

  useEffect(() => {
    console.log('Este useEffect solo se ejecutara una vez');
  }, []);

  useEffect(() => {
    console.log(0);
  }, [username]);

  useEffect(() => {
    console.log(1);
  }, [email]);
  
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="text"
            className="form-control mt-2"
            placeholder="test@test.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
          (username === 'Luis') && <Message /> 
        }
    </>
  )
}
