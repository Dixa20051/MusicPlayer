import { useEffect, useState } from "react";
import Player from "./component/Player";

function App() {

  const [songs] = useState([
    {
      title:"Titaliyan",
      artist:"Hardy Sandhu",
      img_src:"./images/titaliya.jpg",
      src:"./songs/Titliaan Warga.mp3",
    },
    {
      title:"Care ni karda",
      artist:"Yo Yo Honey Singh",
      img_src:"./images/care-ni-karda.jpg",
      src:"./songs/Care Ni Karda.mp3",
    },
    {
      title:"BurjKhalifa",
      artist:"Nikita Gandhi",
      img_src:"./images/burjkalifa.jpg",
      src:"./songs/BurjKhalifa.mp3",
    },
    {
      title:"Nach Meri Rani",
      artist:"Guru Randhawa",
      img_src:"./images/nach-meri-rani.jpg",
      src:"./songs/Naach Meri Rani.mp3",
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = 
  useState(0);
  const [nextSongIndex, setNextSongIndex] = 
  useState(0);

  useEffect(() => {
    setNextSongIndex(() =>{
      if(currentSongIndex +1>songs.length-1){
        return 0
      } else{
        return currentSongIndex+1
      }
        
    })
  },[currentSongIndex,songs.length])

  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
