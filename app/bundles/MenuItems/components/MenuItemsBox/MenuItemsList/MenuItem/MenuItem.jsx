import React, { PropTypes } from 'react';
import Input from 'react-bootstrap/lib/Input'
import css from './MenuItem.scss'
import BaseComponent from 'libs/components/BaseComponent.jsx'

export default class MenuItem extends BaseComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        editable: PropTypes.bool.isRequired,
        onToggle: PropTypes.func.isRequired,
        onDestroy: PropTypes.func.isRequired,
    };

    _showView() {
        return (
            <tr>
                <td>{ this.props.name }</td>
                <td>{ this.props.price }</td>
                <td>
                    <a
                        className="btn btn-default"
                        onClick=this.props.onToggle
                    >
                        Edit
                    </a>
                    <a
                        className="btn btn-danger"
                        onClick=this.props.onDestroy
                    >
                        Delete
                    </a>
                </td>
            </tr>
        )
    }

    _editView() {
        // return (
        //     /*TODOS: To be completed*/
        // )
    }

    render() {
        let view;
        if (this.props.editable) {
            view = this._editView();
        } else {
            view = this._showView();
        }

        return(
            {view}
        )
    }
}


