import { v1 as id } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, VIEW_ITEM, LOADING_ITEMS } from "../actions/types";

const initstate = {
    items: [],
    loading: false

}

export default function (state = initstate, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
              items: state
                  .items
                  .filter(item => item._id !== action.payload)

            }
        
            case ADD_ITEM:
                return {
                    ...state,
                    items:[action.payload, ...state.items]
            };
        
        case LOADING_ITEMS:
            return {
                ...state,
            loading: true
            };
        
        
        default:
            return state;
    
    }
}