import React, { Component } from 'react'

export default class HomeView extends Component {
    render() {
        return (
            <div>
                <h1>Journal Entries</h1>
                {this.props.entries.map((entry, index) => (
                    <article key={index}>
                        <h6>{this.props.categories[entry.categoryId]}</h6>
                        <p>{entry.entry}</p>
                    </article>
                ))}
            </div>
        )
    }
}
