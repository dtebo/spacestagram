import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ImageCard from './ImageCard';
import {getImages} from '../../redux/actions';

import './image.css';

const ImageList = (props) => {
    useEffect(() => {
        props.getImages();
    }, []);

    return(
        <div className='photo-list'>
            {props.images && props.images.map(image => {
                return(<ImageCard 
                            key={image.url}
                            image={image}
                        />)
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        images: state.images,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, {getImages})(ImageList);