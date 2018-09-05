import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './App'

class Demo extends Component {
    render() {
        return <div>
            <App/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))