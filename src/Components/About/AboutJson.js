import React from 'react';

const AboutJson = ({ cards }) => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4>About Us</h4>
                    <h1>
                        We <span>Provide Best Service</span> to Our Customer
                    </h1>
                    {cards.map((value) => {
                        return (
                            <p>{value.details}</p>
                        )

                    })}


                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    {cards.map((value) => {
                        return (
                            <img src={'http://localhost:84' + value.image} alt='' />
                        )

                    })}

                    {/*<img src='/images/about-img-1.jpg' alt='' />*/}
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutJson;