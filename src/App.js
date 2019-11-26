import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateQuote from './GenerateQuote';
import QuoteA from './QuoteA';

const sampleQuotes = [
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }
];


class App extends Component {
  state = {
    quotes: sampleQuotes
  }
    
  handleGenerateQuote = async () => {
   
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=33');
    const json = await response.json();
    const quote = json.results[0];
    this.setState({
      quotes: [
        ...this.state.quotes,
        quote
      ]
    })
  }
  render () {
    const { quotes } = this.state;
  return (
    <div> 
    <GenerateQuote onQuoteSelect ={this.handleGenerateQuote}/>
    {quotes.map((quote) => {
          return (
            <QuoteA quote={quote} />
          )
        })}

    </div>
  );
}
}

export default App;
