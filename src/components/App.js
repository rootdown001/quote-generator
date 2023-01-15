import React, { useState } from 'react';

import '../css/App.css';
import QuoteBox from './QuoteBox';


function App() {

  function randomIndex() {
    return Math.floor(Math.random() * quoteList.length)
  } 
  
  const [ quoteObject, setQuoteObject ]= useState(quoteList[randomIndex()])
  console.log(quoteObject)

   function handleNewQuote() {
    const newQuote = quoteList[randomIndex()]
    setQuoteObject(newQuote)
   }

  return (
    <div>
      <QuoteBox quoteObject={quoteObject} handleNewQuote={handleNewQuote}/>
    </div>
  );
}
 
const quoteList = [
  {id: 1, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
  {id: 2, quote: "Get busy living or get busy dying.", author: "Stephen King"},
  {id: 3, quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
  {id: 4, quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"},
  {id: 5, quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost"},
  {id: 6, quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling"},
  {id: 7, quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt"},
  {id: 8, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
  {id: 9, quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou"},
  {id: 10, quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey"},
  {id: 11, quote: "If you want to make the world a better place, take a look at yourself and make a change.", author: "Michael Jackson"},
  {id: 12, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {id: 13, quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle"},
  {id: 14, quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt"},
  {id: 15, quote: "If you can dream it, you can do it.", author: "Walt Disney"},
  {id: 16, quote: "It is never too late to be what you might have been.", author: "George Eliot"},
  {id: 17, quote: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr."},
  {id: 18, quote: "Everything you can imagine is real.", author: "Pablo Picasso"},
  {id: 19, quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
  {id: 20, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"}
];

export default App;
