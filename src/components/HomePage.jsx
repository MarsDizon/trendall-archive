import React from "react";
import styled from 'styled-components';
import BannerVaseImage from '../assets/basicsearchimage.png';
import BasicSearchBar from "./search_elements/BasicSearchBar";
import GoldBtn from "../components/buttons/GoldBtn";
import { HomeHeader } from ".";
import trendall_img from "../assets/trendall.jpeg"

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
            <GoldBtn name="Go To Advanced Search" link="/advanced-search" />
          </AdvancedSearchDiv>
        </SearchBarDiv>
      </BasicSearchBanner>

      <div class="container-sm">
        <div class="row align-items-center justify-content-center my-5">
          <div class="col-lg-2">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={trendall_img}
              alt=""
            />
          </div>
          <div class="col-lg-9">
            <h2 class="font-weight-light">The Trendall Archive</h2>
            <p>
              The A.D. Trendall Research Centre holds more than 40,000 photographs collected by Arthur D. Trendall for his research.
              This photographic archive is classified according to the painters identified by Trendall over his lifetime of study and
              is a unique research resource for Ancient Mediterranean Pottery. The Archive is currently in the process of being
              digitised and stored in a database accessible online by the general public. This online database currently contains vases
              from 'Red-Figured Vases of Paestum' by Arthur D. Trendall.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
