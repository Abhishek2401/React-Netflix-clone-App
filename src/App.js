import React from 'react';
import requests from './request';
import Row from './Row';
import './App.css'
import Navbar from './Navbar';
import Banner from './Banner';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Documentaires' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
