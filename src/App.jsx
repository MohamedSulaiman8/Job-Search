import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jobs from "./components/JobDiv/Jobs";
import Value from "./components/ValueDiv/Value";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
function App(){
  return(
    <div className="w-[85%] m-auto bg-white">
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}
export default App;