import axios from 'axios';

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAIL = 'FETCH_IMAGE_FAIL';

export const getImages = () => dispatch => {
    dispatch({type: FETCH_IMAGE_START});

    axios.get("https://api.nasa.gov/planetary/apod?start_date=2021-01-01&end_date=2021-09-01&api_key=hujeiE0i5EMgKa1KAjMzpnaKbARkFafgwpfWsWFx")
        .then(photos => {
            console.log(photos);
            dispatch({type: FETCH_IMAGE_SUCCESS, payload: photos.data});
        })
        .catch(err => {
            dispatch({type: FETCH_IMAGE_FAIL, payload: err});
        });
};