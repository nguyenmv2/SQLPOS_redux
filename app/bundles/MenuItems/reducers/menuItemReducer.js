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
    const { type, menu_item, menu_items, error, id } = action;

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
        case actionTypes.EDIT_SUCCESS: {
            return $$state.withMutations( state => {
                state
                    .updateIn(
                        ['$$menu_items'],
                        $$menu_items => {
                            let firstHalf = $$menu_items.slice(0,id)
                            let secondHalf = $$menu_items.slice(id+1)
                            let newList = firstHalf
                                .push(Immutable.fromJS(menu_item))
                                .concat(secondHalf)
                            return newList
                        }
                    )
                    .merge({
                        isEditing: false,
                        isEditable: false,
                        editError:null
                    })
            })
        }
        case actionTypes.EDIT_FAILURE: {
            return $$state.merge({
                isEditable: false,
                isEditing: false,
                editError: error
            })
        }
        default: {
            //Always return the initialState
            return $$state;
        }
    }


}