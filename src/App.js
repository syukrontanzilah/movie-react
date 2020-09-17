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
      title="What's Popular"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
      title="Trending"
      fetchUrl={requests.fetchTrending}
      />
      <Row
      title= "Action Movie"
      fetchUrl={requests.fetchActionMovies}
      />
      <Footer/>
          </div>
  )
}

export default App