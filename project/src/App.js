import './App.css';
import { useState } from 'react';
import MovieListe from './MovieListe';
import {Routes,Route} from "react-router-dom"
import Search from './Search';
import Detals from './Detals';

function App() {
  const [word,setWord]=useState("")
  const [rating, setRating]=useState(1)
  const [movies,setMovies]=useState([
    { id:1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        main_img:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rate: "4",
      trailer:"https://www.youtube.com/watch?v=mqqft2x_Aa4"
    
    },
    { id: 2,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        main_img:
        
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rate:"5",
      
  
    },
    { id: 3,
      title: "The spiderman",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      main_img:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Godfather_part_II.jpg",
      rate: "3",
   
      
  },
  ])

  const getData=(key)=>{
setWord(key)
  }
  const getRate=(rate)=>{
setRating(rate)
  }
  return (
    <div className="App">
     <Search getData={getData} getRate={getRate}/>
     <Routes>
      <Route path='/' element={ <MovieListe movies={movies}/>}/>
      <Route path='/movie/:id' element={ <Detals movies={movies}/>}/>
     </Routes>
   
    
    </div>
  );
}

export default App;
