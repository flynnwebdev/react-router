import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CategorySelectionView extends Component {
    render() {
        return (
            <div>
                <h1>What type of entry do you want to write?</h1>
                <ul>
                    {this.props.categories.map((item, index) => (
                        <li key={item}>
                            <Link to={`/entry/new/${index}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
