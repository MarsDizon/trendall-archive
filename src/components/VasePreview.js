import React, { useEffect,useState } from 'react';
import axios from 'axios';
import SampleVase from '../assets/samplevase.png';

//-------------------------------------------------------------

//Function to call the API and retrieve the vase
const VasePreview = (props) => {
  const [Data,setData]=useState([])

  useEffect(()=>{
      //Get the selected vase using the vaseRef passed through the URL
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${props.vaseRef}`)
          .then(res=>{
              setData(res.data)
          })
          .catch(err=>{
              console.log(err);
          })
  },[])

//Return the first plate image found in Vase. If not found, return 'NoPlatesFound' image
  return(
    <>
      <img src= '../assets/samplevase.png'/>
    </>
  )
}
export default VasePreview;

