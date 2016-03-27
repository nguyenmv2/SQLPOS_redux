/* eslint new-cap: 0 */

import Immutable from 'immutable';

import * as actionTypes from '../constants/menuItemsConstants';

export const $$initialState = Immutable.fromJS({
    $$menu_items: [],
    isFetching: false,
    isSaving: false,
    isEditing: false,
    isEditable: false,
    fetchError: null,
    submitError: null,
    editError: null
})
export default function menuItemsReducer($$state = $$initialState, action = null){
    const { type, menu_item, menu_items, error } = action;

    switch( type ){
        case actionTypes.FETCH_FAILURE: {
            return $$state.merge({
                fetchError: error
            })
        }
            
        case actionTypes.FETCH_SUCCESS: {
            return $$state.merge({
                $$menu_items: menu_items,
                fetchError: null,
                isFetching: false,
            });
        }
            
        case actionTypes.FETCH_REQUEST: {
            return $$state.merge(
                {isFetching: true}
            );
        }
            
        case actionTypes.SUBMIT_REQUEST: {
            return $$state.merge(
                {isSaving: true}
            );
        }
            
        case actionTypes.SUBMIT_SUCCESS: {
            return $$state.withMutations(state => {
                state
                    .updateIn(
                        ['$$menu_items'],
                        $$menu_items => $$menu_items.unshift(Immutable.fromJS(menu_item))
                    )
                    .merge({
                        submitError: null,
                        isSaving: false
                    })
            })
        }
            
        case actionTypes.SUBMIT_FAILURE: {
            return $$state.merge({
                isSaving: false,
                submitError: error
            })
        }
            
        case actionTypes.TOGGLE_EDITABLE: {
            return $$state.merge({
                isEditable: true
            })
        }
            
        case actionTypes.EDIT_REQUEST: {
            return $$state.merge({
                isEditing: true,
                isEditable: true,
            })
        }

        default: {
            //Always return the initialState
            return $$state;
        }
    }


}