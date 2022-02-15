import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  AdvancedSearch,
  Footer,
  HomePage,
  Contact,
  FacetedSearch,
  ViewVase,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/advanced-search" element={<AdvancedSearch />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<FacetedSearch />}/>
      <Route path="/vase/" element={<ViewVase/>} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
