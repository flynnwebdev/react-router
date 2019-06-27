import React, { Component } from 'react'

export default class EntryForm extends Component {
    state = {
        entry: ''
    }

    handleChange = (event) => {
        this.setState({
            entry: event.target.value
        })
    }

    saveEntry = (event) => {
        event.preventDefault()
        this.props.addEntry(this.props.categoryId, this.state.entry)
        this.props.history.push('/')
    }

    render() {
        return (
            <form onSubmit={this.saveEntry}>
                <div>
                    <textarea value={this.state.entry} onChange={this.handleChange} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Create Entry</button>
            </form>
        )
    }
}
