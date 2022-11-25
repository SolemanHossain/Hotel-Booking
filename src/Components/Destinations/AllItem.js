import React, { useState } from "react"
import "./Destinations.css"
import { Slide,Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Dcards from "./Dcards";
import Sdata from "./Sdata";

const AllItem = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <section id="image-carousel" class="circular">
        <div className="slide-container">
          <Fade slides={items.images} autoplay={true} interval={1000}>
          {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </Fade>
        </div>
      </section>
    </>
  )
}

export default AllItem
