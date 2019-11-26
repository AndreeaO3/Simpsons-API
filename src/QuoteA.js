import React from 'react';


const QuoteA = ({quote}) => {
    return (
     <div className="QuoteA">
        <ul>
    <li> {quote.quote}</li>
    <li> {quote.character}</li>
        </ul>
    <img src={quote.image} alt=''/>
    <p> {quote.characterDirection}</p>
        </div>
    );
};

export default QuoteA;