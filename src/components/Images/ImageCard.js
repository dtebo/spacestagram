import React from 'react'

import * as MUI from '../../MaterialUI';

const ImageCard = (props) => {
    return(
        <>
            <MUI.Card
                className='card'
            >
                <MUI.CardContent>
                    <MUI.Typography
                        component='h1'
                    >
                        {props.image.title}
                    </MUI.Typography>
                    <img
                        className='photo' 
                        src={props.image.url}
                        alt={props.image.title}
                    />
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default ImageCard;