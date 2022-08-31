
import './App.css';
import { Welcome } from './Welcome';
import {Route,Routes ,BrowserRouter } from "react-router-dom";
import { Signup } from './Signup';
import { Signin } from './Signin';
import { MainPage } from './Mainpage/MainPage';
import {Frame} from './Mainpage/Frame';

function App() {
  var url="https://spoti05.herokuapp.com/"
  var songInfo=[]
    fetch(`${url}song&Img`)
  .then(response => response.json())
  .then(data =>songInfo.push(...data))
  console.log(url)
               

 
  var updated=[
    {
      _id: "630a16da8fe7316763ce11c3",
      id: 1,
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern"
    },
    {
      _id: "630a16da8fe7316763ce11c4",
      id: 2,
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks"
    },
    {
      _id: "630a16da8fe7316763ce11c5",
      id: 3,
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms"
    },
    {
      _id: "630a16da8fe7316763ce11c6",
      id: 4,
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower"
    },
    {
      _id: "630a16da8fe7316763ce11c7",
      id: 5,
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star"
    },
    {
      _id: "630a16da8fe7316763ce11c8",
      id: 6,
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball"
    },
    {
      _id: "630a16da8fe7316763ce11c9",
      id: 7,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast"
    },
    {
      _id: "630a16da8fe7316763ce11ca",
      id: 8,
      img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
      title: "Tree"
    },
    {
      _id: "630a16da8fe7316763ce11cb",
      id: 9,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger"
    },
    {
      _id: "630a16da8fe7316763ce11cc",
      id: 10,
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera"
    },
    {
      _id: "630a16da8fe7316763ce11cd",
      id: 11,
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee"
    },
    {
      _id: "630a16da8fe7316763ce11ce",
      id: 12,
      img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
      title: "Camping Car"
    },
    {
      _id: "630a16da8fe7316763ce11cf",
      id: 13,
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats"
    },
    {
      _id: "630a16da8fe7316763ce11d0",
      id: 14,
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil"
    }
  ]
 
   
  
  
  
  

 
  
 
 
  return (
  <BrowserRouter>
   <Routes>
       <Route path="/" element={<Welcome />} />
       <Route path="/Signup" element={<Signup/>} /> 
       <Route path="/Signin" element={<Signin/>} /> 
       <Route path="/MainPage" element={<MainPage  updated={updated}/>} /> 
       <Route path="/:id" element={<Frame  songInfo={songInfo} updated={updated}/>}/>
         
      
       
     
    
  </Routes> 
  </BrowserRouter>
    

 )}

export default App;
