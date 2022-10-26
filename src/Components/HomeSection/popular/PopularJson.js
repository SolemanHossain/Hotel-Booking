import React, { useEffect, useState } from 'react';

const PopularJson = () => {
    const [room, setRoom] = useState([]);
    useEffect(() => {
        fetch('http://localhost:84/drupal/popularroom?_format=json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default PopularJson;