import React from 'react'


class Form extends React.Component {
    // constructor(props){
    // super(props)
    // }
      render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <h1>Weather conditions in your area</h1>
                <input type="text" name="city" placeholder="Warsaw" autoComplete="off"/>
                <input type="text" name="country" placeholder="Poland" autoComplete="off"/>
                <button type="submit">Click</button>
            </form>

        )
      }
    }

    export default Form
