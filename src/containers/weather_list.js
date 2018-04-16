import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component { 
    renderWeather(cityData) {
        const city_name = cityData.city.name;

        const city_temp     = cityData.list.map(weather => weather.main.temp);
        const city_pressure = cityData.list.map(weather => weather.main.pressure);
        const city_humidity = cityData.list.map(weather => weather.main.humidity);

        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        // const { lon, lat } = cityData.city.coord;

        return (
            <tr name={city_name} key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={city_temp} color="red" units="K"/></td>
                <td><Chart data={city_pressure} color="green" units="hPa"/></td>
                <td><Chart data={city_humidity} color="gray" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}
/*
function mapStateToProps({ weather }) {
    return { weather };
}
*/

export default connect(mapStateToProps)(WeatherList);