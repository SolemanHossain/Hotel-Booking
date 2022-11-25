import React from 'react';

const AboutJson = ({ cards }) => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <span class="customHeading_4Size underline_hover">About Us</span><br/>
                    <div class="customHeading_5Size custom-font-color">
                        <p>We<span class="custom-font-color-blue"> Provide Best Service</span> to Our Customer</p>
                    </div>
                    <div class="customHeading_6Size custom-font-color">
                    {cards.map((value) => {
                        return (
                            <p>{value.details}</p>
                        )

                    })}
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    </div>
                    <button className='secondary-btn custom-round-buttons'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    {cards.map((value) => {
                        return (
                            <img src={'http://hahnvilla.de.w01d64e5.kasserver.com' + value.image} alt='' />
                        )

                    })}

                    {/*<img src='/images/about-img-1.jpg' alt='' />*/}
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='icon-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutJson;