import React, {Component} from "react";
import "./item-add-forms.css";

export default class ItemAddForms extends Component {


    render() {
        return (
            <div className="item-add-forms">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Hello World')}>
                    Add Item
                </button>
            </div>
        );
    };
};