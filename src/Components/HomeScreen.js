import React from 'react'
import requests from '../Requests';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
       <Row
        title = "NETFLIX ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginal}
       isLargeRow = {true}
         />
         <Row title = "Trending Now" fetchUrl = { requests.fetchTrending} /> 
         <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies } /> 
         <Row title = "Comedy Movies" fetchUrl = { requests.fetchComedyMovies} /> 
         <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies } /> 
         <Row title = "Documentaries" fetchUrl = { requests.fetchDocumentaries} /> 
         <Row title = "Anime" fetchUrl = {requests.fetchAnime } /> 
      <div></div>
    </div>
  )
}

export default HomeScreen;