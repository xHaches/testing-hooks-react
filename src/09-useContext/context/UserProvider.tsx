import React, { useState } from "react"
import { UserContext } from "./UserContext"

const userInitialState = {
    id: '',
    name: '',
    email: ''
}

export const UserProvider = ({ children }: {children : React.ReactNode}) => {

  const [user, setUser] = useState(userInitialState);

  return (
    <UserContext.Provider value={{...user, setUser}}>
        { children }
    </UserContext.Provider>
  )
}
