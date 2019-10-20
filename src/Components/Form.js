import React from "react";
const API_KEY = "e70e00c193a89547249484c3903fed60";
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
