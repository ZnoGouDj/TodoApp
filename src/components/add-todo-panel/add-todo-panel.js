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

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <form className="d-flex top-panel"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="new todo"
                    className="form-control search-input"
                    value={this.state.inputValue}
                    onChange={e => this.updateInputValue(e)} />
                <button className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}