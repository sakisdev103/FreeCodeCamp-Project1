import React, { useEffect, useState } from 'react';

const Quotes = () => {

  const [data, setData] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState('');

  const fetchQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setData(data);
    });
  }
  
  useEffect(()=>{
    fetchQuote();
  },[])
  
  const updateQuote = () =>{
    setSelectedQuote(data[Math.floor(Math.random() * data.length) + 1]);
  }

  if(selectedQuote === ''){
    data.slice(0,1).map((item)=>{
      setSelectedQuote(item);
    })
  }

  return (
    <div className="center">
      <div className="container container-position" id='quote-box'>
        {
          <div className='container'>
            <h3 id='text'>{selectedQuote.text}</h3>
            <p id='author'>-{selectedQuote.author}</p>
          </div>

        }
          <div className='quote-footer'>
            <a  target="_blank"  href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(selectedQuote.text)}" ${encodeURIComponent(selectedQuote.author)}`} id='tweet-quote'><i className="fa-brands fa-twitter fa-lg"></i></a>
            <button className='btn btn-primary' id='new-quote' onClick={updateQuote}>New Quote</button>
          </div>
      </div>
    </div>
  )
}

export default Quotes