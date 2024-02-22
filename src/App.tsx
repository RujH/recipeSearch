import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./components/home";
import Search from "./components/search";
 
function App() {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          
          <Route path="/search" element={<Search />} />
        </Routes>
    </Router>
  );
}
 
export default App;