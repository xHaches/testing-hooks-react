import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, email, username, password, onResetForm} = useForm<{
    username: string,
    email: string,
    password: string
  }>({
    username: '',
    email: '',
    password: ''
  })

  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
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
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
    </>
  )
}
