import React, { Component } from 'react';

export default class AddTodoPanel extends Component {

    state = {
        inputValue: ''
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        const { onAddItem } = this.props;
        return (
            <div className="d-flex top-panel">
                <input
                    type="text"
                    placeholder="new todo"
                    className="form-control search-input"
                    value={this.state.inputValue}
                    onChange={e => this.updateInputValue(e)} />
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onAddItem(this.state.inputValue)}>
                    Add
                </button>
            </div>
        )
    }
}