import React from "react";
import { SearchHeader } from ".";
import menzies_exterior from "../assets/menzies_exterior.jpg";

function Contact() {
  return (
    <div className="contact">
      <SearchHeader />
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={menzies_exterior}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-normal">Contact Us</h1>
            <p>
              <b>A.D. Trendall Research Centre</b><br/>
              Menzies College <br/>
              La Trobe University <br/>
              Victoria 3086 <br/>
              AUSTRALIA 
            </p>
            <p> 
              <b>T:</b> +61 3 9479 2845 <br/>
              <b>F:</b> +61 3 9479 1827 <br/>
              <b>E:</b> trendall@latrobe.edu.au <br/>
              <small><i>Open by appointment only</i></small><br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
