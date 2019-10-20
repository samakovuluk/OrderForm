import React from "react";
import Info from "./Components/Info";
import Form from "./Components/Form";
import Weather from "./Components/Weather";


const API_KEY = "e70e00c193a89547249484c3903fed60";
class App extends React.Component{
    state = {
        temp: undefined,
        sunset: undefined,
        error: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
        if (data.cod === 200) {
            this.setState({
                temp: data.main.temp,
                sunset: data.sys.sunset,
                error: undefined
            })
        }
        else
        {
            this.setState({
                temp: undefined,
                sunset: undefined,
                error: "Введите другой город"
            });
        }
    };
    render() {
        return(
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 info">
                            <Info/>
                        </div>
                        <div className="col-md-7 form">
                            <Form gettingWeather={this.gettingWeather} />
                            <Weather temp={this.state.temp} sunset={this.state.sunset} error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default App;