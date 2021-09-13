import Head from 'next/head'
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import Nav from "../components/Nav";
import requests from '../utility/requests';

// Update the FavIcon for browser
export default function Home({results}) {
  
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu Clone made by Dajon Williams" />
        <meta name="author" content="Dajon Williams"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>



       {/* Header */}
      <Header/>

       {/* Navbar */}
      <Nav/>

       {/* Main/Body */}
      <MainBody results={results}/>

      

       
    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  // Returns Dynamic URL in Json for Topic Genre Titles
const request = await fetch(`https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`)
.then(res =>res.json())

return {
  props:{
    results:request.results,
  },
}

}

