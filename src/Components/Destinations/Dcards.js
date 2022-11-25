import React from 'react';
import "./Destinations.css"

const Cards = ({ item: { id, image, title, link, desc, accessibility} }) => {
  return (
    <>
      <div class='image-block'>
        <div>
          <center><div class="font-color custom-font-size "><a href={link}>{title}</a></div></center><br />
          <div className='custom-image image-block'>
            <img src={image} alt='Image' />
          </div>
          <br />
        </div>
        <div>
        <div class="font-color block-description">
          <span class="customHeadingSize"><u>Description</u>:</span>
          <p>{desc}</p></div><br />
        <div class="font-color block-accessibility customHeading_2Size"><u>Accessibility :</u> <span>{accessibility}</span></div><br />
        <div class="font-color block-link customHeadingSize">Link: <a href={link}>{link}</a></div><br />
        </div>
      </div>
    </>
  )
}

export default Cards