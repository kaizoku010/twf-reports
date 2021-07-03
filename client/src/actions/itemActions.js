import  axios  from "axios";

import {
    GET_ITEMS, ADD_ITEM,
    DELETE_ITEM, VIEW_ITEM,
    LOADING_ITEMS
} from "./types";

export const getItems = () => dispatch => {
    dispatch(setLoading());
    axios.get('/api/entries')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
    }))
    
}




export const addItem = (item) => dispatch => {
    axios.post('/api/entries', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
    }))
    
};



export const deleteItem = id => dispatch => {
    axios.delete(`/api/entries/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        }) )
    };


export const setLoading = () => {
    return {
        type: LOADING_ITEMS
    };

}