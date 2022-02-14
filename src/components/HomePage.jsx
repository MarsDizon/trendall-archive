import React from "react";
import styled from 'styled-components';
import BannerVaseImage from '../assets/basicsearchimage.png';
import BasicSearchBar from "./search_elements/BasicSearchBar";
import GoldBtn from "../components/buttons/GoldBtn";
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
            <GoldBtn name="Go To Advanced Search" link="/advanced-search" />
          </AdvancedSearchDiv>
        </SearchBarDiv>
      </BasicSearchBanner>

      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home page</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

    <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home page</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
