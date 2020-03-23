import React, { Component } from 'react'

export default class Hash extends Component {
    render() {
        return (
            <div>
                <h1>Hash your password</h1>
                <input name="password"/>
                <br></br>
                <button>Hash</button>
            </div>
        )
    }
}
