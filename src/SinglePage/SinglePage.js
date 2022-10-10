import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <div className="">
                  <h1>Our Service in {item.title} Room </h1>
                  <p>{item.desc}</p>
                  <ul className="mb-3">
                    <li>Kitchen</li>
                    <li>Wifi</li>
                    <li>Free street parking</li>
                    <li>Dedicated workspace</li>
                    <li>TV with standard cable</li>
                    <li>Indoor fireplace</li>

                  </ul>
                </div>

                <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div>
                {/*<p>{item.desc}</p>*/}
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
                <div className='slider-form side-content'>
                  <div className='container'>
                    <h2>Enjoy Your Holiday</h2>
                    <span> In Our Dream House</span>

                    <form>
                      <input type='text' placeholder='Season' />
                      <div className='flex_space'>
                        <input type='date' placeholder='Check In' />
                        <input type='date' placeholder='Check Out' />
                      </div>
                      <div className='flex_space'>
                        <input type='number' placeholder='Adult(s)(18+)' />
                        <input type='number' placeholder='Children(0- 17)' />
                      </div>
                      <input type='number' placeholder='Rooms' />
                      <input type='Submit' value='Reserve Now' className='submit' />
                    </form>
                  </div>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>

        </section>

      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
