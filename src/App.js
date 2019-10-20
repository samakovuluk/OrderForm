import React from "react";
import Info from "./Components/Info";
import Form from "./Components/Form";
import Weather from "./Components/Weather";


const API_KEY = "e70e00c193a89547249484c3903fed60";
class App extends React.Component{
    state = {
        temp: undefined,
        sunset: undefined
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
                sunset: data.sys.sunset
            })
        }
        else
        {
            this.setState({
                temp: undefined,
                sunset: undefined
            });
        }
    };
    render() {
        return(
            <div>
                <Info/>
                <Form gettingWeather={this.gettingWeather} />
                <Weather temp={this.state.temp} sunset={this.state.sunset}/>
            </div>
        );
    }
}
export default App;