import React, {PropTypes} from 'react';
import Immutable from 'immutable';
import _ from 'lodash';

import MenuItem from './MenuItem/MenuItem.jsx'
import BaseComponent from 'libs/components/BaseComponents.jsx'

export default class MenuItemsList extends BaseComponent {
    static propTypes = {
        $$menuItems: PropTypes.instanceOf(Immutable.List).isRequired,
        onToggle: PropTypes.func.isRequired,
        onDestroy: PropTypes.func.isRequired,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const {$$menuItems, onToggle, onDestroy} = this.props;
        const MenuItems = $$menuItems.map($$menuItem =>
            <MenuItem
                key={$$menuItem.get('id')}
                name={$$menuItem.get('name')}
                price={$$menuItem.get('price')}
                onToggle
                onDestroy
            />
        );
        return (

            //    MENUITEM FORM goes here TODOS
            <table className="table table-striped table-sm table-bordered">
                <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {MenuItems}
                </tbody>
            </table>
        )
    }
}