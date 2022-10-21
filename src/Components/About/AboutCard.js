import React, { useEffect, useState } from "react"
import "./About.css"
import AboutCardJson from "./AboutCardJson";

const AboutCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch('http://localhost:84/drupal/aboutus?_format=json')
      .then(res => res.json())
      .then(data => setCard(data));
  }, [])
  return (
    <div>
      {
        card.map(cards => <AboutCardJson cards={cards} />)
      }
    </div>

  );
};

export default AboutCard

/*<>
     <div className='aboutCard mtop flex_space'>
       <div className='row row1'>
         <h4>About Us</h4>
         <h1>
           We <span>Provide Best Service</span> to Our Customer
         </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
         <button className='secondary-btn'>
           Explore More <i className='fas fa-long-arrow-alt-right'></i>
         </button>
       </div>
       <div className='row image'>
         <img src='/images/about-img-1.jpg' alt='' />
         <div className='control-btn'>
           <button className='prev'>
             <i className='fas fa-play'></i>
           </button>
         </div>
       </div>
     </div>
 </>*/
