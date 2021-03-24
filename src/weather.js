import React from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap'

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state={
      weather:[],
      error: false
    }
  }

  componentDidMount = async() => {
    const SERVER = 'http://localhost:3001';
    try {
      const weather = await axios.get(`${SERVER}/weather?lat=${this.props.lat}&lon=${this.props.lon}`);
      // const weatherRaw = await axios.get(`${SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`)
      const weatherData = weather.data;
      console.log(`weatherdata: ${weatherData}`);
      this.setState({ 
        weather: weatherData
        // weatherObj[city]: weatherData.city
      });
    } catch(error) {
      console.error(error);
      this.setState({ error: true });
    }
  }

  render() {
    return(
      <>
        <h2 className="mt-3">Weather</h2>
        <ListGroup variant="flush" className="w-50">
          {Object.keys(this.state.weather).map((day, index) => (
            <ListGroup.Item eventKey={index}> {day.date} {day.description}</ListGroup.Item>
          ))}
          {console.log(this.state.weather)}
        </ListGroup>
        {this.state.error && 
          <>
          {/* <Error currentError={this.state.error}/> */}
          </> 
        }
      </>
    )
  }
}

export default Weather;
