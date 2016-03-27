import expect from 'expect'
import Immutable from 'immutable';
import menuItemsReducer from '../app/bundles/MenuItems/reducers/menuItemReducer';
import * as types from "../app/bundles/MenuItems/constants/menuItemsConstants"

describe('menuItem reducer', () => {
    it('should return initial state', () => {
        expect(
            menuItemsReducer(undefined, {})
        ).toEqual(
            Immutable.fromJS(
                {
                    $$menu_items: [],
                    isFetching: false,
                    isSaving: false,
                    isEditing: false,
                    isEditable: false,
                    fetchError: null,
                    submitError: null,
                    editError: null
                }
            )
        )
    })
    it('should show isFetching=true', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.FETCH_REQUEST
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: true,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })
    it('should return the results from the API call ', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.FETCH_SUCCESS,
                menu_items: ['a', 'b', 'c']
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: ['a', 'b', 'c'],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })
    it('should return the error from call ', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.FETCH_FAILURE,
                error: 'Not working - it sucks'
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: 'Not working - it sucks',
                submitError: null,
                editError: null
            })
        )
    })
    it('should return the state of submitting', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.SUBMIT_REQUEST
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: true,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })
    it('should return the newly added item', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.SUBMIT_SUCCESS,
                menu_item: 'a'
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: ['a'],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })
    it('should return error if failed submitting', () => {
        expect(menuItemsReducer(undefined, {
                type: types.SUBMIT_FAILURE,
                error: "Can't submit shit"
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: "Can't submit shit",
                editError: null
            })
        )
    })

    it('should send  the edit request variable', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.EDIT_REQUEST
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: false,
                isEditing: true,
                isEditable: true,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })

    it('should send toggle the edit variable', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.TOGGLE_EDITABLE
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: true,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })

    it('should give the new state if edit success', () => {
        let mockState = Immutable.fromJS({
            $$menu_items: ['a','b','c'],
            isFetching: false,
            isSaving: false,
            isEditing: true,
            isEditable: true,
            fetchError: null,
            submitError: null,
            editError: null
        })
        expect(
            menuItemsReducer(mockState, {
                type: types.EDIT_SUCCESS,
                id: 0,
                menu_item: 'b'
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: ['b','b','c'],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: null
            })
        )
    })
    it('should give me the error if failed to edit', () => {
        expect(
            menuItemsReducer(undefined, {
                type: types.EDIT_FAILURE,
                error: "can't edit shit"
            })
        ).toEqual(
            Immutable.fromJS({
                $$menu_items: [],
                isFetching: false,
                isSaving: false,
                isEditing: false,
                isEditable: false,
                fetchError: null,
                submitError: null,
                editError: "can't edit shit"
            })
        )
    })
})

