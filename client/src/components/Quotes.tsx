import { useState } from "react";
import "../css/base.css";
import axios from "axios";

function Quotes() {
    const [currentQuote, setCurrentQuote] = useState("");

    const showNewQuote = () => {
        let quote = "";

        axios
            .get("https://dummyjson.com/quotes/random")
            .then((response) => {
                quote = response.data["quote"];
                setCurrentQuote(quote);
            })
            .catch((error) => {
                console.log(error);
            });

        return quote;
    };

    return (
        <div className="flex flex-col gap-7">
            <p id="quote-block">
                {currentQuote ? currentQuote : "No quote (press button)"}
            </p>
            <button onClick={showNewQuote} className="btn btn-primary">
                New Quote
            </button>
        </div>
    );
}

export default Quotes;
