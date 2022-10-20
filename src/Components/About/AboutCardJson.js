import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';

const AboutCardJson = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:84/drupal/aboutus?_format=json')
            .then(res => res.json)
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            {
                card.map(cards => <AboutCard cards={cards}></AboutCard>)
            }
        </div>
    );
};

export default AboutCardJson;