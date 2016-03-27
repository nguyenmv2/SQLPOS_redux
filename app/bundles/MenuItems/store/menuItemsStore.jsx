import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
    const initialMenuItems = props.menu_items;
    const { $$menuItemsState } = initialStates;
    const initialState = {
        $$menuItemsStore: $$menuItemsState.merge({
            $$menuItems: initialMenuItems,
        }),
    };

    const reducer = combineReducers(reducers);
    const composedStore = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );

    return composedStore(createStore)(reducer, initialState);
};