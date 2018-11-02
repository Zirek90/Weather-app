import React from 'react'


// class Form extends React.Component {
    // constructor(props){
    // super(props)
    // }
    //   render() {
        const Form = (props) => {
        return (
            <form onSubmit={props.getWeather}>
                <h1>Weather conditions in chosen city</h1>
                <input type="text" name="city" placeholder="city" autoComplete="off"/>
                <input type="text" name="country" placeholder="country" autoComplete="off"/>
                <button type="submit">Choose city</button>
            </form>

        )
    }
    //   }
    // }

    export default Form
