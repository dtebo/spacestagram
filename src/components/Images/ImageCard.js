import React from 'react'

import moment from 'moment';

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
                    <MUI.Typography
                        component='p'
                    >
                        {moment(props.image.date).format("MMMM DD, YYYY")}
                    </MUI.Typography>
                    <img
                        className='photo' 
                        src={props.image.url}
                        alt={props.image.title}
                    />
                    <br />
                    <br />
                    <MUI.Typography
                        component='p'
                    >
                        {props.image.explanation}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default ImageCard;