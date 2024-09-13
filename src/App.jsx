import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AboutUsPage, HomePage, ItemsPage ,ServicesPage} from "./page";

const App = () => {
  return (
    <>        
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/items" element={<ItemsPage/>}/>
      </Routes>
    </>
    
  );
};

export default App;
