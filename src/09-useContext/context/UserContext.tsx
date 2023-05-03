import { createContext, Dispatch, SetStateAction } from "react";

export interface IUser {
    id: string,
    name: string,
    email: string,
}

export interface User extends IUser {
    setUser?: Dispatch<SetStateAction<{ id: string; name: string; email: string; }>>
}

export const UserContext = createContext<User>({
    id: '',
    name: '',
    email: ''
});