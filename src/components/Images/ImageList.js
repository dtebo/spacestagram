import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

import './image.css';

const ImageList = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?start_date=2021-01-01&end_date=2021-09-01&api_key=hujeiE0i5EMgKa1KAjMzpnaKbARkFafgwpfWsWFx")
            .then(photos => {
                console.log(photos);
                setImages(photos.data);
            })
            .catch(err => console.error(err));
    }, []);

    return(
        <div className='photo-list'>
            {images && images.map(image => {
                return(<ImageCard 
                            key={image.url}
                            image={image}
                        />)
            })}
        </div>
    );
};

export default ImageList;