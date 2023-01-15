import React from 'react'

export default function QuoteBox({quoteObject, handleNewQuote}) {
  return (
    <div className="boxHolder">
        <div id="quote-box">
            <div className="quote-text">
            <i class="fa fa-quote-left"> </i><span id="text">{quoteObject.quote}</span>
            </div>
            <div className="quote-author">~ <span id="author">{quoteObject.author}</span>
            </div>
            <div className="button-row">
                <button className="btn" id="tweet-btn" ><a href="https://twitter.com/intent/tweet" target="_top" id="tweet-quote"><i class="fa fa-twitter"></i></a></button>
                <button className="btn" id="new-quote" onClick={() => handleNewQuote()} >New Quote</button>
            </div>
        </div>
    </div>
  )
}
