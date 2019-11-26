import React from 'react';

const GenerateQuote = ({onQuoteSelect}) => {
    return (
        <div className = "GenerateQuote">
            <button onClick={() => onQuoteSelect()}>Get quote</button>
        </div>
    );
};

export default GenerateQuote;