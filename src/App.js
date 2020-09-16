import React from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return(
<div  className="app">

<Navbar/>

<Banner/>

<Row
title="WHATS POPULAR"
fetchUrl={requests.fetchNetflixOriginals}
/>

<Row
title="Trending"
fetchUrl={requests.fetchTrending}
/>

<Row
title= "Action moview"
fetchUrl={requests.fetchActionMovies}
/>


<Footer/>

    </div>
  )
}

export default App