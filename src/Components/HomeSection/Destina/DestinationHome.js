import React from "react"
import "../popular/MostPopular.css"
import AllItem from "../../Destinations/AllItem"

const DestinationHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading heading_nearest_visiting_places'>
          <span class="Text customHeadingHomePage underline_hover">Nearest Places to Visit</span>
          </div>
          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome
