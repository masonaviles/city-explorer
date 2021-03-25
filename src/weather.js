import React from 'react';
import axios from 'axios';
import { ListGroup, Accordion, Card, Button } from 'react-bootstrap'

class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state={
      list:[],
      error: false
    }
  }

  componentDidMount = async() => {
    const SERVER = 'http://localhost:3001';
    const weather = await axios.get(`${SERVER}/weather/`);
    const weatherArray = weather.data;
    console.log(weatherArray);
    console.log("newArray=", weather.data);
    this.setState({ list: weatherArray });
  }

  render() {
    return(
      <>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="info" eventKey="0">
                View Weather Forecast
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{this.state.list.map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.date}  {value.desc}</ListGroup.Item>
                </ListGroup>
                
                // <div key={key}>
                //   <h4>{value.date}  {value.desc}</h4>
                // </div>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
      </>
    )
  }
}

export default Weather;
