import React from 'react';
import DailyWeather from './dailyWeather'
import { Accordion, Card, Button } from 'react-bootstrap'

class Weather extends React.Component {

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
              <Card.Body>
              {this.props.weather.map((element, index) => (
                <DailyWeather key={index} date={element.date} description={element.description} />
              ))}
                {/* <DailyWeather weather={this.props.weather} /> */}
              {/* {this.props.weather.map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.date}  {value.description}</ListGroup.Item>
                </ListGroup>
                ))} */}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
      </>
    )
  }
}

export default Weather;
