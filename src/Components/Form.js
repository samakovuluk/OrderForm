import React from "react";
class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.gettingWeather} >
                <input type="text" name="city" placeholder="Город"/>
                <button>Получть город</button>
            </form>
        );
    }
}
export default Form;
