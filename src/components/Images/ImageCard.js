import React, {useState} from 'react'

import moment from 'moment';

import * as MUI from '../../MaterialUI';

import EmbedVideo from '../EmbedVideo/EmbedVideo';

const ImageCard = (props) => {
    const [liked, setLiked] = useState('Like');

    const toggleLike = (e) => {
        e.preventDefault();

        if(liked == 'Like'){
            setLiked('Dislike');
        }
        else{
            setLiked('Like');
        }
    };

    return(
        <>
            <MUI.Card
                className='card'
            >
                <MUI.CardContent>
                    <MUI.CardHeader
                        title={props.image.title}
                    >
                        <MUI.Typography
                            component='h1'
                        >
                            {props.image.title}
                        </MUI.Typography>
                    </MUI.CardHeader>
                    
                    <MUI.Typography
                        component='p'
                    >
                        {moment(props.image.date).format("MMMM DD, YYYY")}
                    </MUI.Typography>
                    {props.image.media_type === 'video' ? (
                        <EmbedVideo url={props.image.url} />
                    ) : 
                        (<MUI.CardMedia
                            component='img'
                            height='194'
                            image={props.image.url}
                            alt={props.image.alt} />)
                        }
                </MUI.CardContent>
                <MUI.CardContent>
                    <MUI.Typography
                            component='p'
                        >
                            {props.image.explanation}
                    </MUI.Typography>
                </MUI.CardContent>
                <MUI.CardContent>
                    <MUI.Button
                        variant="outlined"
                        onClick={toggleLike}
                    >
                        {liked}
                    </MUI.Button>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default ImageCard;