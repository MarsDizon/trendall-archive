import React from "react";
import { SearchHeader } from ".";
import trendall_center_img from "../assets/trendall_center.jpg"

function About() {
  return (
    <div className="about">
      <SearchHeader />
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-8">
            <h1 class="font-weight-normal">About Us</h1>
            <p>
              <p><b>The Trendall Research Centre has the following objectives: </b><br/></p>
              <ul>
                <li> 
                  To promote research in the general area of Ancient Mediterranean studies, 
                  particularly in the archaeology of South Italy and Sicily during the Classical period.
                </li>
              </ul>
              <ul>
                <li> 
                  To disseminate within the general community in Australia the results of the latest 
                  research in Greek and Roman art and archaeology through the sponsorship of conferences, 
                  lectures and seminars.
                </li>
              </ul>
              <ul>
                <li>
                  To make available, at the Director's discretion, the resources of the Centre to all scholars 
                  and graduate students, whether from Australia or overseas, who wish to use the library and archive.
                </li>
              </ul>
              <ul>
                <li>
                  To maintain and extend both the Library and the Archive (as unique research resources in Australia) 
                  through the acquisition of books and periodicals relating to Greek and Roman culture, and images of 
                  South Italian red-figure vases.
                </li>
              </ul>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={trendall_center_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
