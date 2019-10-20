import React from "react";
const Weather = props =>{
        return(
            <div className="InfoWeath">
                {
                    props.temp
                        &&
                    <div>
                        <p> Temperature: {props.temp}</p>
                        <p> Sunset: {props.sunset}</p>
                    </div>
                }
                {
                    <p className={"error"}>{props.error}</p>
                }
            </div>

        )
}
export default Weather;