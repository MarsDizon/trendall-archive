import React from "react";
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import BannerVaseImage from '../assets/basicsearchimage.png';
import BasicSearchBar from "./search_elements/BasicSearchBar";
import GoldBtn from "./buttons/GoldBtn";
import { HomeHeader } from ".";


//---------------------------------------------------------------------------------------

const BasicSearchBanner = styled.div`
  width: 100%;
  height: 450px;
  padding: 45px 60px 45px 60px;
  box-sizing: border-box;
  background-color: #D4422F;
  background-image: url(${BannerVaseImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 850px;
`

const TrendallTitle = styled.div`
  display: 'flex';
  font-family: 'Roboto', sans-serif;
  padding-top: 100px;
  font-size: 65px;
  letter-spacing: 0.05em;
  line-height: 70px;
  text-transform: uppercase;
  color: #FCF7EE;
`

const SearchBarDiv = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 2%;
`

const AdvancedSearchDiv = styled.div`
    display: flex;
    padding-left: 1.5%;
`

//--------------------------------------------------------------------------------------------


function HomePage() {
  return (
    <div className="home">
      <HomeHeader/>
      <BasicSearchBanner>
        <TrendallTitle>A.D. Trendall<br/>Research Centre</TrendallTitle>
          <SearchBarDiv>
          <BasicSearchBar/>
          <AdvancedSearchDiv>
            <Tooltip title="Advanced Search">
              <GoldBtn name="Go To Advanced Search" link="/advanced-search" />
            </Tooltip>
          </AdvancedSearchDiv>
        </SearchBarDiv>
      </BasicSearchBanner>
      <div className='search-by-category'>
        {/*Display Search Results Title with number of vases found*/}
        <div style={{ display:'flex', fontFamily:"Roboto", fontSize:"19px", padding: '10px 0px 30px 0px'}}>
          Search By Category (Unimplemented)
        </div>

        {/*Vase Result Card*/}
        <ul className="card-grid">
          <div className="card baseBlock mb-4 border-0">
              <div className="card-image">
                  <img src= 'https://i.ibb.co/VSQ311K/streamline-icon-history-urn-140x140.png'/>
              </div>

              <div className="card-content">
                  <li>
                      <h2 className="card-name">SHAPE</h2>
                  </li>
              </div>
          </div>

          <div className="card baseBlock mb-4 border-0">
              <div className="card-image">
                  <img src= 'https://i.ibb.co/N9jL0RQ/streamline-icon-archive-books-140x140.png'/>
              </div>

              <div className="card-content">
                  <li>
                      <h2 className="card-name">COLLECTION</h2>
                  </li>
              </div>
          </div>

          <div className="card baseBlock mb-4 border-0">
              <div className="card-image">
                  <img src= 'https://i.ibb.co/R6tQqBF/streamline-icon-color-painting-palette-140x140.png'/>
              </div>

              <div className="card-content">
                  <li>
                      <h2 className="card-name">FABRIC</h2>
                  </li>
              </div>
          </div>

          <div className="card baseBlock mb-4 border-0">
              <div className="card-image">
                  <img src= 'https://i.ibb.co/smgb44d/streamline-icon-color-brush-2-140x140.png'/>
              </div>

              <div className="card-content">
                  <li>
                      <h2 className="card-name">SUBJECT</h2>
                  </li>
              </div>
          </div>

          <div className="card baseBlock mb-4 border-0">
              <div className="card-image">
                  <img src= 'https://i.ibb.co/2ZSbrpG/streamline-icon-crafts-pottery-140x140.png'/>
              </div>

              <div className="card-content">
                  <li>
                      <h2 className="card-name">PROVENANCE</h2>
                  </li>
              </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
