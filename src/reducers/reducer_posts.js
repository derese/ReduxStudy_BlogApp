import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions/index';
const INITIAL_STATE = { all:[],post:null};

export default function(state=INITIAL_STATE,action)
{    
    switch (action.type) {
        case FETCH_POSTS:            
            return { ...state,all:action.payload.data}; 
        case FETCH_POST:
            return {...state,post:action.payload.data};   
       // case DELETE_POST:  // it wont modify the state so no need to delete it ?
         ///   return {};
        default:
           return state;
    }
} 