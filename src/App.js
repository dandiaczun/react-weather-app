import React from 'react';
import Titles from './components/titles.js'
import Form from './components/form.js'
import Weather from './components/weather.js'

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

  class App extends React.Component {

    getWeather = async () => {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
      const response = await api_call.json();
      console.log(response);
    }

    render() {
      return (
        <div>
          <Titles />
          <Form />
          <Weather />
        </div>
      )
    }
  }

export default App;
