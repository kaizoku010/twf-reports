import axios  from "axios";

import {
    GET_ITEMS, ADD_ITEM,
    DELETE_ITEM, VIEW_ITEM,
    LOADING_ITEMS
} from "./types";

import { tokenConfig, tokenconfig } from './authActions'
import {returnErrors} from './errorActions'


export const getItems = () => dispatch => {
    dispatch(setLoading());
    axios.get('/api/entries')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
    
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    
}




export const addItem = item => (dispatch, getState) => {
    axios.post('/api/entries', item, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

};



export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/entries/${id}`, tokenConfig(getState)).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

    };


export const setLoading = () => {
    return {
        type: LOADING_ITEMS
    };

}