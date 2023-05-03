import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples'; 

export const Layout = () => {

    const {counter, increment, reset} = useCounter(1);

    const { data, isLoading, error } = useFetch<{author: string, quote: string}[]>(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    const changeQuote = () => {
        if(counter >= 20) {
            reset()
        }
        increment(1);
    }

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading
                    ? ( <LoadingQuote /> ) : ( <Quote author={author} quote={quote} /> )
            }
            <button onClick={changeQuote} className="btn btn-primary" disabled={isLoading}>
                Next Quote
            </button>
        </>
    )
}
