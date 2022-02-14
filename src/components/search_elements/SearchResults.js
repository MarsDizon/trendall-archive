import React, { useEffect, useState } from "react";
import axios from 'axios';
import { CircularProgress, Box } from '@material-ui/core';
import BackBtn from "../buttons/BackBtn";

const SearchResults = () => {
    //API to query the database and return search results
    const [Data, setData] = useState([])

    const urlPath = window.location.href;
    const pathname = urlPath.replace("http://localhost:3000/search/", "");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/filterVase/${pathname}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    //Loading Screen while the API is called. 
    const Loading = () => {
        const [found, setFound] = useState(true)
        const timer = setTimeout(() => {
            setFound(false)
        }, 3000)

        //If API returns a result, finish the timeout of Loading Animation
        if (found){
            return (
                <Box sx={{ color: '#DAA844', display: 'flex', justifyContent: 'center', marginTop: '25%' }}>
                    <CircularProgress color="inherit" size="100px" />
                </Box>
            )
        }

        //If API returns no results, display 'No Vases Found' Page
        if (!found){
            return (    
                <Box sx={{ color: '#DAA844', display: 'flex', justifyContent: 'center', marginTop: '25%' }}>
                    <div style={{ display:'block', justifyContent:"center", fontStyle:"normal", fontSize:"25px", paddingBottom:"20px", color: "#3F342C", letterSpacing:"1px" }}>
                        No Vases Found
                        <div style={{marginLeft:"30px"}}><BackBtn /></div>
                    </div>
                </Box>
            )
        }
    }

    //Display Search Results
    const ResultsFound = () => {
        return (
            <>
                {/*Display Search Results Title with number of vases found*/}
                <div style={{ display:'flex', justifyContent:"center", fontStyle:"normal", fontSize:"19px", paddingTop: '80px',paddingBottom:"20px", color: "#3F342C", letterSpacing:"1px" }}>
                    Search Results ({Data.length !== 0 ? Data.length : 0}) 
                </div>

                {/*Vase Result Card*/}
                <ul className="card-grid">
                    {Data.map((item) => (
                        <a href ={`/viewVase/?vaseRef=${item.vaseRef}`} key={`${item.vaseRef}`} textDecoration="none"> {/* This needs to change */}
                            <div className="card baseBlock mb-4 border-0">
                                <div className="card-image">
                                    <img src= 'https://i.ibb.co/1Tjbnj6/P-1-2.png'/>
                                </div>

                                <div className="card-content">
                                    <li>
                                        <h2 className="card-name">RVP no. {item.vaseRef}</h2>
                                    </li>
                                    <li>
                                        [{item.collectionName ? item.collectionName : `Collection Not Found`}]
                                    </li>
                                </div>
                            </div>
                        </a>
                    ))}
                </ul>
            </>              
        )
    }

    //While the API is being called, display Loading Screen. If the API returns with vases, display Search Results.
    return (
        <div className="wrapper">
            {Data.length === 0 ? 
                <Loading /> 
                : 
                <ResultsFound/>
            }            
        </div>
    );
    }

export default SearchResults;