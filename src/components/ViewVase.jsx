import React, { useEffect, useState } from 'react';
import { SearchHeader } from ".";
import axios from 'axios';
import styled from 'styled-components';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BackBtn from './buttons/BackBtn';

//-------------------------------------------------------------

const VaseImgDiv = styled.div`
    max-width: 25%;
    left: 0;
    padding: 150px 45px 45px 45px;
`

//-------------------------------------------------------------

//Takes vaseRef parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);

//Function to call and consume the API for the particular vase
const Vase=()=>{
    const [Data,setData]=useState({
        VaseRef:'',
        Fabric:'',
        Technique:'',
        Subject:'',
        Height:'',
        Diameter:'',
        ArtistName:'',
        Publications:'',
        Collection:'',
        Shape:'',
        Provenance:''
    })

    useEffect(()=>{
        //Get the selected vase using the vaseRef passed through the URL
        axios.get(`http://127.0.0.1:8000/api/getVase/?vaseRef=${vaseRef}`)
            .then(res=>{
                console.log({vaseRef})
                console.log('Response from main API: ',res) //printing the response to the console for debugging
                let vaseData=res.data[0]; //add data to vaseData, then assign into each variable
                setData({VaseRef:vaseData.vaseRef,Fabric:vaseData.fabric,Technique:vaseData.technique,Subject:vaseData.subject, Height:vaseData.height, Diameter:vaseData.diameter, ArtistName:vaseData.artistName,Collection:vaseData.collectionName,Shape:vaseData.shapeName,Provenance:vaseData.provenanceName, Publications:vaseData.publications}) //vaseData is never assigned so these variables areundefined
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

//Return and display the vase information that was retrieved in the function
    return(
        <>    
              <div className = "vaseDiv">
                <h2>RVP no. {Data.VaseRef}, {Data.Collection ?  Data.Collection : "Collection Not Found"}</h2>
                <tbody>
                  <table>
                      <tr>
                          <th>Vase Number</th> <td>{Data.VaseRef ? Data.VaseRef : "Vase Number Not Found"}</td> 
                      </tr>
                      <tr>
                          <th>Collection</th> <td>{Data.Collection ? Data.Collection : "N/A"}</td> 
                      </tr>
                      <tr>
                          <th>Fabric</th> <td>{Data.Fabric}</td> 
                      </tr>
                      <tr>
                          <th>Technique</th> <td>{Data.Technique}</td> 
                      </tr>
                      <tr>
                          <th>Description</th> <td>{Data.Subject}</td> 
                      </tr>
                      <tr>
                          <th>Shape</th> <td>{Data.Shape}</td> 
                      </tr>
                      <tr>
                          <th>Provenance</th> <td>{Data.Provenance ? Data.Provenance : "N/A" }</td> 
                      </tr>
                      <tr>
                          <th>Publications</th>  <td>{Data.Publications ? Data.Publications : "N/A" }</td> 
                      </tr>
                          <th>Height</th><td>{Data.Height ? Data.Height + ` cm` : "N/A"}</td>
                      <tr>
                          <th>Diameter</th><td>{Data.Diameter ? Data.Diameter + ` cm` : "N/A"}</td>
                      </tr>
                  </table>
                </tbody>
              </div>
        </>
    )
}

//Function to call and consume the API
const VaseImage=()=>{
  const [Data,setData]=useState([])

  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${vaseRef}`)//get the selected vase using the vaseRef passed through the URL
          .then(res=>{
              console.log({vaseRef})
              console.log('Response from main API: ',res) //printing the response to the console
              setData(res.data)
          })
          .catch(err=>{
              console.log(err);
          })
  },[]
  )

//Return the image carousel
  return(
      <>
        <VaseImgDiv>
              <div className="img-gallery">
                {/* Alice Carousel 
                <AliceCarousel
                  // REMOVED: Map through each item in the array and insert plateRef into the image URL
                  items= {Data.map((image, key) => <div key={key}><img src={`https://trendallplates.blob.core.windows.net/images/P-${image.plateRef}.png`} /></div>)}
                  autoPlayInterval={2000}
                  autoPlayDirection="ltr"
                  autoPlay={false}
                  fadeOutAnimation={true}
                  playButtonEnabled={false}
                  disableAutoPlayOnAction={true}
                />
              */}
                <img src= 'https://i.ibb.co/1Tjbnj6/P-1-2.png' width="400px" />
              </div>
        </VaseImgDiv>
      </>
    )
}

function ViewVase() {
  return (
    <div className="view-vase">
      <SearchHeader />
      <div class="container-fluid d-flex justify-content-center">
        <div class="row w-100 my-auto">
          <div class="col-lg-0">
            <VaseImage />
          </div>
          <div class="col" md="auto">
            <p>
              <Vase />
            </p>
          </div>
        </div>
        <div class="row">
            <p>
              hello
            </p>
          </div>
      </div>
    </div>
  );
}

export default ViewVase;