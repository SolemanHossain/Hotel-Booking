import React from "react"
import Cards from "./Cards"
import "./MostPopular.css"
import PopularJson from "./PopularJson"

const MostPopular = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading heading_popular_rooms'>
            <span class="underline_hover customHeadingHomePage">Hahn Villa - Seville</span>
          </div>
          <center>
            <div><input  class = "search_location_villa" type="text" placeholder="Enter your location"></input></div>
          </center>
          <div className='content'>
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}

export default MostPopular
