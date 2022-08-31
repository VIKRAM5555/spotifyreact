

import { Button } from '@mui/material';
import * as React from 'react';
import {ImageList,ImageListItem,ListSubheader} from '@mui/material/';
import { useNavigate } from "react-router-dom";






export  function MainPage({updated}) {
    
  return(
<div className='main'>

  <FrameVideo   updated={updated}/>
   
</div>
   )}


 
  export function FrameVideo ({updated}){ 
    
    const navigate = useNavigate();
   
  return <div>
       
     <ImageList className="Gallery" sx={{ width: 1300, height: 600, padding:10 }} cols={3} variant="masonry" gap={1} >
     <h1>Songs for You...</h1>
        <h6>BASED ON RECENT LISTENING</h6>
        <h1>Click Image</h1>
        <h6>ENJOY... TRENDING-INSTRUMENTAL</h6>
        
  <div className='leftImg'>{updated.map((item) => (
        
         <Button onClick={() => navigate(`/${item.id}` ) } > 
          <ImageListItem key={item.img}>
         
        <ListSubheader className="subheader"><h3>{item.title}</h3></ListSubheader>
      
         <img  className='updated'
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          
           
          />
          </ImageListItem>
     </Button> ))}</div>


  
     
        

    
   

     </ImageList>
          
   </div>
     }




    
    