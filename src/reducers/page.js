//reducers

//import {SET_YEAR} from '../actions/PageActions'
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'


const initialState = {
  year: 2021,
  photos: [],
  isFetching: false,
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_YEAR: // изменили строку на константу
    //   return { ...state, year: action.payload };
    
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false } 

    default:
      return state;
  }
}