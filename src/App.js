import React from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'

const App = () => {
  return(
<div className="App">

<h1>TMDB</h1>

<Row
title="WHATS POPULAR"
fetchUrl={requests.fetchNetflixOriginals}
/>

<Row
title="Trending Now"
fetchUrl={requests.fetchTrending}
/>



    </div>
  )
}

export default App