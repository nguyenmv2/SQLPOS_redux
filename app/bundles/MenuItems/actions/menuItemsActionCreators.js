import requestsManager from '../../../lib/requestManager';
import * as actionTypes from '../constants/menuItemsConstants';

export function itemIsFetching(){
    return {
        type: actionTypes.FETCH_REQUEST,
    };
}

export function itemIsSaving(){
    return {
        type: actionTypes.SUBMIT_REQUEST,
    };
}

export function itemIsEditing(){
    return {
        type: actionTypes.EDIT_REQUEST,
        
    };
}

export function toggleEditable(){
    return {
        type: actionTypes.TOGGLE_EDITABLE,
    }
}

export function fetchMenuItemsSuccess(menu_items){
    return {
        type: actionTypes.FETCH_SUCCESS,
        menu_items
    };
}
export function fetchMenuItemsFailure(error){
    return {
        type: actionTypes.FETCH_FAILURE,
        error
    };
}

export function submitMenuItemSuccess(menu_item){
    return {
        type: actionTypes.SUBMIT_SUCCESS,
        menu_item
    };
}
export function submitMenuItemFailure(error){
    return {
        type: actionTypes.SUBMIT_FAILURE,
        error
    };
}

export function editMenuItemSuccess(idx,menu_item){
    return {
        type: actionTypes.EDIT_SUCCESS,
        idx,
        menu_item
    }
}
export function editMenuItemFailure(error){
    return {
        type: actionTypes.EDIT_FAILURE,
        error
    };
}

export function fetchMenuItems(){
    return dispatch => {
        dispatch(itemIsFetching());
        return (
            requestsManager
                .fetchEntities()
                .then(res => dispatch(fetchMenuItemsSuccess(res.data)))
                .catch(res => dispatch(fetchMenuItemsFailure(res.data)))
        );
    }
}

export function submitMenuItem(menu_item){
    return dispatch => {
        dispatch(itemIsSaving());
        return (
            requestsManager
                .submitEntity(menu_item)
                .then(res => dispatch(submitMenuItemSuccess(res.data)))
                .catch(res => dispatch(submitMenuItemFailure(res.data)))
        )
    }
}

export function editMenuItem(id, menu_item){
    return dispatch => {
        dispatch(itemIsEditing());
        return (
            requestsManager
                .editEntity(id, menu_item)
                .then(res => dispatch(editMenuItemSuccess(res.data.id, res.data.menu_item)))
                .catch(res => dispatch(editMenuItemFailure(res.data)))
        )
    }
}