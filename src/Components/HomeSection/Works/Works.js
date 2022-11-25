import React from "react"
import "../popular/MostPopular.css"
import "./Works.css"
import Card from "./Card"
import Wdata from "./Wdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <span class="Text customHeadingHomePage underline_hover">How It Works</span>
          </div>

          <div className='content grid'>
            {Wdata.map((value, index) => {
              return <Card class="custom_box_shadowing" key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works
