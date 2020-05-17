import axios from 'axios'

export const FETCH_SMURF_INFO = 'FETCH_SMURF_INFO';
export const FETCH_SMURF_INFO_SUCCESS = 'FETCH_SMURF_INFO-SUCCESS';
export const FETCH_SMURF_INFO_FAILURE = 'FETCH_SMURF_INFO_FAILURE';

export const POST_NEW_SMURF_INFO = 'POST_NEW_SMURF_INFO';




export const fetchSmurfInfo = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_INFO });

        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data, 'AXIOS GET request data!!!!!!!!!!?????????')
            dispatch({ type: FETCH_SMURF_INFO_SUCCESS, type: res.data})
        })
        .catch(err => console.log(err))
        dispatch({ type: FETCH_SMURF_INFO.FAILURE})
    }
}

export const postSmurfInfo = () => {
    return dispatch => {
        dispatch({ type: POST_NEW_SMURF_INFO});

        axios.post('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res, 'POST REQUEST DATA????!!!!!!!!!')
            dispatch({ type: POST_NEW_SMURF_INFO, payload:object})
        })



    }



}