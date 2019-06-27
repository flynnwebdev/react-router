import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewEntryView extends Component {

    render() {
        // console.log(this)
        const category = this.props.categories[this.props.match.params.id]
        return (
            <div>
                <Link to="/category"><button>Back to Categories</button></Link>
                <h1>New {category} entry</h1>
            </div>
        )
    }
}
