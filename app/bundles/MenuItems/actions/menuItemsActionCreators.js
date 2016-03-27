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

export function itemIsEditing(id){
    return {
        type: actionTypes.EDIT_REQUEST,
        id
    };
}

export function toggleEditable(id){
    return {
        type: actionTypes.TOGGLE_EDITABLE,
        id
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

export function editMenuItemSuccess(menu_item){
    return {
        type: actionTypes.EDIT_SUCCESS,
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