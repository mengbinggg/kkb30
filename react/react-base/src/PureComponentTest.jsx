import React, { Component, PureComponent } from 'react'

export default class pureComponentTest extends Component {
    state = {
        count: 0
    }

    render() {
        console.log('render')

        const { count } = this.state
        return (
            <div>
                <h1>父组件</h1>
                <button onClick={() => { this.setState({ count: count + 1 }) }}>改变</button>

                <Child a={count}></Child>
            </div>
        )
    }
}


class Child extends PureComponent {
    render() {
        console.log("child render")

        const { a } = this.props
        return (
            <div>
                <h1>子组件</h1>
                {a}
            </div>
        )
    }
}
