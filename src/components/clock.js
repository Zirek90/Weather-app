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


const ClockTime = (props) => {

    return (
        <h1 className="clock">{props.tim}</h1>
    )
}

const ClockDate = (props) => {

    return (
        <h1>{props.day}</h1>
    )
}

export default Clock;