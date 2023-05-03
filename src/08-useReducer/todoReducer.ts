export enum Actions {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    TOGGLE = 'TOGGLE',
    DEFAULT = 'DEFAULT'
}

export const todoReducer = (initialState: any, action: {type: string, payload: {id: number, description?: string, done?: boolean}}) => {
    switch (action.type) {
        case Actions.ADD:
            return [...initialState, action.payload]
        case Actions.REMOVE:
            return initialState.filter((todo: {id: number, description: string, done: boolean}) => todo.id !== action.payload.id)
        case Actions.TOGGLE:
            return initialState.map((todo: {id: number, description: string, done: boolean}) => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}