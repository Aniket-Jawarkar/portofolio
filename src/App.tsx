import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import FeaturedProjects from "./Components/FeaturedProjects";
import LeetCode from "./Components/LeetCode";




const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <FeaturedProjects/>
        <LeetCode username="Aniket_Jawarkar86"/>
    </div>
  )
}

export default App