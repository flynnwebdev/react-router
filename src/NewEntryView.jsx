import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EntryForm from './EntryForm';

export default class NewEntryView extends Component {

    render() {
        // console.log(this)
        const categoryId = this.props.match.params.id
        const category = this.props.categories[categoryId]
        return (
            <div>
                <Link to="/category"><button>Back to Categories</button></Link>
                <h1>New {category} entry</h1>
                <EntryForm {...this.props} addEntry={this.props.addEntry} categoryId={categoryId} />
            </div>
        )
    }
}
