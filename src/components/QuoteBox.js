import React from 'react'

export default function QuoteBox() {
  return (
    <div className="boxHolder">
        <div id="quote-box">
            <div className="quote-text">
            <i class="fa fa-quote-left"> </i><span id="text">Here is a random quote about persistence, vision, effort, etc. It should be enough text to show how the quote box works.</span>
            </div>
            <div className="quote-author">~ <span id="author">Lance Anderson</span>
            </div>
            <div className="button-row">
                <button className="btn" id="tweet-quote" ><a href="https://twitter.com/intent/tweet"><i class="fa fa-twitter"></i></a></button>
                <button className="btn" id="new-quote">New Quote</button>
            </div>
        </div>
    </div>
  )
}
