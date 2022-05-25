import React from 'react';
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

import './CustomHooks.css';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />


            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>

                            {
                                counter > 1 && (
                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={decrement}
                                    >
                                        Previous Quote
                                    </button>
                                )
                            }

                            {
                                counter > 1 && (
                                    <button
                                        className="reset_btn btn btn-primary mt-3"
                                        onClick={ reset }
                                    >
                                        Back to Home
                                    </button>
                                )
                            }

                            <button
                                className="btn btn-primary mt-3"
                                onClick={increment}
                            >
                                Next Quote
                            </button>

                        </blockquote>

                    )
            }

        </div>
    )
}
