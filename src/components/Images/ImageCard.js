import React from 'react'

import * as MUI from '../../MaterialUI';

const ImageCard = (props) => {
    return(
        <>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.Typography>
                        {props.image.title}
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default ImageCard;