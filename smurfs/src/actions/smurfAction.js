import axios from 'axios'

export const FETCH_SMURF_INFO = 'FETCH_SMURF_INFO';
export const FETCH_SMURF_INFO_SUCCESS = 'FETCH_SMURF_INFO-SUCCESS';
export const FETCH_SMURF_INFO_FAILURE = 'FETCH_SMURF_INFO_FAILURE';

export const POST_NEW_SMURF_INFO = 'POST_NEW_SMURF_INFO';

export const DELETE_SMURF = 'DELETE_SMURF';




export const fetchSmurfInfo = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_INFO });

        axios 
            .get('http://localhost:3333/smurfs')
                .then((res) => {
                    console.log(res, 'AXIOS GET request data!!!!!!!!!!?????????')
                    dispatch({ type: FETCH_SMURF_INFO_SUCCESS, payload: res.data})
                })
                .catch(err => {console.log(err);
                dispatch({ type: FETCH_SMURF_INFO_FAILURE})
                })
    }
}

export const postSmurfInfo = (object) => {
    return dispatch => {
        // dispatch({ type: POST_NEW_SMURF_INFO});

        axios
            .post('http://localhost:3333/smurfs', object)
                .then((res) => {
                    console.log(res, 'POST REQUEST DATA????!!!!!!!!!')
                    dispatch({ type: POST_NEW_SMURF_INFO, payload:object})
                })

    }
}




































//  export const deleteSmurf = (id) => {
//     return dispatch => {
//         dispatch ({ type: DELETE_SMURF});
//         axios
//             .delete('http://localhost:3333/smurfs/${id}')
//                 .then((res) => { console.log(res, 'deleted smurf info??????????')
//                     dispatch({ type: DELETE_SMURF, payload: id})
//                 })
//     }
// }                
