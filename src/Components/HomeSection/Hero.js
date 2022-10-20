import React, { useEffect, useState } from "react"
import "./Home.css"
import Slide from "./Slide"

const Home = () => {
  const [slides, setSlide] = useState([]);
  useEffect(() => {
    fetch('http://localhost:84/drupal/slider')
      .then(res => res.json())
      .then(data => setSlide(data));

  }, [])
  return (
    <>
      <Slide
        key={slides.uuid}
        slides={slides} />
    </>
  )
}

export default Home
