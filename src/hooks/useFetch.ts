import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    const getQuotes = async () => {
        setState({...state, isLoading: true})
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            error: null,
        });
    }

    useEffect(() => {
        getQuotes();
    }, [url])
    


    return {
        data: <T>state.data,
        isLoading: state.isLoading,
        error: state.error
    };
}
