import React from 'react';
import axios from 'axios';
import { Navbar, Form, Button, Container, Card } from 'react-bootstrap'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:{},
      searchQuery: '',
      imgSrc: '',
      displayResults: false
    }
    // console.log('constructor');
  }

  getLocationInfo = async(e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    try {
      const location = await axios.get(url);
      const locationArray = location.data;
      this.setState({ 
        location: locationArray[0], 
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
        long: locationArray[0].lon,
        lati: locationArray[0].lat
      });
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }


  render() {
    console.log('state', this.state)
    return(
      <>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Created by: <a href="#login">Mason Aviles</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <h1>Welcome</h1>
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
            <>
              {/* <h2>{this.state.location.display_name}</h2>
              <p>Longitude: {this.state.long}</p>
              <p>Latitude: {this.state.lati}</p>
              <img src={this.state.imgSrc} /> */}
              <Container>
                <Card className="mt-4">
                  <Card.Header as="h5">{this.state.location.display_name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>Longitude: {this.state.long}</p>
                      <p>Latitude: {this.state.lati}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img variant="bottom" src={this.state.imgSrc} />
                </Card>
              </Container>
            </>
          }
        </Container>
      </>
    )
  }
}

export default App;
