import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItemsBox from '../components/MenuItemsBox/MenuItemsBox.jsx'
import * as actionCreators from '../actions/menuItemsActionCreators'
import BaseComponent from '../../../lib/components/BaseComponent.jsx'

function select(state) {
    return { data: state.$$menuItemsStore };
}

class MenuItemsContainer extends BaseComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
    };
    
    render() {
        const { dispatch, data } = this.props;
        const actions = bindActionCreators(actionCreators, dispatch);
        return (
            <MenuItemsBox {...{ actions, data }} />
        );
    }
    
}
export default connect(select)(MenuItemsContainer);