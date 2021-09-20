import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

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
        <>
            <h1>Image list goes here...</h1>
            {images && images.map(image => {
                return(<ImageCard 
                            key={image.url}
                            Image={image}
                        />)
            })}
        </>
    );
};

export default ImageList;