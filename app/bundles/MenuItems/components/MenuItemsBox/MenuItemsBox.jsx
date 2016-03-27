import React, { PropTypes } from 'react';

import MenuItemsList from './MenuItemsList/MenuItemsBox.jsx'
import BaseComponent from 'libs/components/BaseComponents.jsx'


export default class MenuItemsBox extends BaseComponent{
    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
    };
    
    componentDidMount() {
        const { fetchMenuItems } = this.props.actions;
        fetchMenuItems();
    }

    render() {
        const { actions, data } = this.props;
        
        return (
            <div className="container MenuItemsBox">
                <h3 className="title">
                    Menu Items
                </h3>
                <MenuItemsList
                    $$menuItems ={ data.get('$$menuItems') }
                />
            </div>
        );
    }
}