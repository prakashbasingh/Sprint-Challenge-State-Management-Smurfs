import {FETCH_SMURF_INFO} from '../actions/smurfAction';
import {FETCH_SMURF_INFO_SUCCESS} from '../actions/smurfAction';
import {FETCH_SMURF_INFO_FAILURE} from '../actions/smurfAction';

import {POST_NEW_SMURF_INFO} from '../actions/smurfAction';

const initialState = {
  isFetching: false,
  smurfs: [],
  errors: '',
  // newSmurfList: []

}


export const SmurfReducer = (state = initialState, action) => {

    switch(action.type) {
      case FETCH_SMURF_INFO:
        return{
          ...state,
          isFetching: true
      }
      case FETCH_SMURF_INFO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs:  action.payload
        }
      case FETCH_SMURF_INFO_FAILURE:
        return {
          ...state,
          errors:'error error error!!!!'
        }
      case POST_NEW_SMURF_INFO:
        return{
          ...state,
          smurfs: [...state.smurfs, action.payload]
        }
         
    default:
      return state;
    }
}































// import { DELETE_SMURF } from '../actions/smurfAction';


// case DELETE_SMURF:
//   const afterDeletedSmurfList = state.newSmurfList.filter(smurf=>{
//     if(action.payload !== smurf.id){
//       return smurf
//     }
//   })
//   return{
//     ...state,
//     newSmurfList: afterDeletedSmurfList
//   }