import React from "react";

class Weather extends React.Component{
    render() {
        return(
            <div>
                {this.props.temp &&
                <div>
                    <p> Temperature: {this.props.temp}</p>
                    <p> Sunset: {this.props.sunset}</p>
                </div>
                }
            </div>

        )
    }
}
export default Weather;