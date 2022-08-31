import * as React from 'react';
import {ListSubheader} from '@mui/material/';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';






export function Frame({ songInfo,updated}) {
  const{ id } = useParams();

  


  return <div >
   
   <ListSubheader className="subheaderPlay"><h3>{updated[id-1].title}</h3></ListSubheader>
   <img className="playImg"  src={updated[id-1].img} alt={updated[id-1].title} />

    <ReactAudioPlayer className="playerSong"
  src={songInfo[id].src} 
  autoPlay
  controls
/>

  </div>;


}




