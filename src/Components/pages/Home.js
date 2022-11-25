import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"

const Home = () => {
  return (
    <>
      <Hero />
      {/*hahn Villa Seville*/}
      <MostPopular />
      {/*Nearest Places to visit*/}
      <DestinationHome />
      {/*how it works*/}
      <Works />
      <Gallery />
    </>
  )
}

export default Home
