import './App.css';
import {useState,useEffect} from 'react';
import {data} from './data';
const App = () => {

const [myGallery,setGallery] = useState([]);

useEffect(()=>{
  setGallery(data);
},[]);

  const galleryFilter = (filterItem) =>{
    if(filterItem === "All"){
      setGallery(data);
    }else{
      const updateItem = data.filter((currEle)=>{
        return currEle.tag === filterItem
      });
      setGallery(updateItem);
    }
    
  }


  return (
    <>  

    <div className='filter'>
      <button onClick={()=>galleryFilter("All")}>All</button>
      <button onClick={()=>galleryFilter("People")}>People</button>
      <button onClick={()=>galleryFilter("Food")}>Food</button>
      <button onClick={()=>galleryFilter("Animals")}>Animals</button>
      <button onClick={()=>galleryFilter("Plants")}>Plants</button>   
    </div>

    <div className='gallery'>
     {
       myGallery.map((item,index)=>
         <div><img src={item.src} key={index} /></div>
       )
     }
     </div>
    </>
    );
}

export default App;
