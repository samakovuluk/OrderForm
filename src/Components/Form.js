import React from "react";
const Form = props =>{
        return(
            <div>
            <form onSubmit={props.gettingWeather} >
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить город</button>
            </form>
            </div>
        );

}
export default Form;
