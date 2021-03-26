import React from 'react';
import axios from 'axios';
import { Container, Form, Button, Col } from 'react-bootstrap'
import NavHeader from './nav';
import Weather from './weather';
import Map from './map';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      weather: []
    }
  }

  getLocationInfo = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    try {
      const location = await axios.get(url);
      const locationArray = location.data;
      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
        lon: locationArray[0].lon,
        lat: locationArray[0].lat
      });
      // pass data into weather
      this.getWeather(locationArray[0]);
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
    }
  }

  getWeather = async (location) => {
    try{
      console.log('inside of getWeather', location);
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, { params: {latitude: location.lat, longitude: location.lon}});

      console.log('weather data', weather.data);
      this.setState({ weather: weather.data });

    } catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <NavHeader />
        <Container>
          <h1>Welcome</h1>
          <Col>
            <Weather weather={this.state.weather}/>
          </Col>
          <Col>
            <Container>
              <Form onSubmit={this.getLocationInfo} >
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="search for a city here" onChange={(e) => this.setState({ searchQuery: e.target.value })} />
                  <Form.Text className="text-muted">
                    Where do you want to go?
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Explore!
                </Button>
              </Form>
            </Container>
            {this.state.displayResults &&
              <Map
                displayName={this.state.location.display_name}
                longitude={this.state.lon}
                latitude={this.state.lat}
                imgSrc={this.state.imgSrc}
              />
            }
          </Col>
        </Container>
      </>
    )
  }
}

export default App;
