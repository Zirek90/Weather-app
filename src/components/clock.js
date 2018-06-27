import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    render() {
        return (
            <div>
                <ClockDate day={this.state.time.toLocaleDateString()}/>
                <ClockTime tim={this.state.time.toLocaleTimeString()}/>
            </div>
        )
    }

    componentDidMount() {
        this.int = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.int)
    }
}


class ClockTime extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <h1 className="clock">{this.props.tim}</h1>
        )
    }
}

class ClockDate extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <h1>{this.props.day}</h1>
        )
    }
}

export default Clock;