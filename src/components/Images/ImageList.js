import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {

    }, []);

    return(
        <>
            <h1>Image list goes here...</h1>
            {images && images.map(image => {
                return(<ImageCard Image={image}/>)
            })}
        </>
    );
};

export default ImageList;