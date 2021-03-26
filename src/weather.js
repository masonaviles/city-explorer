import React from 'react';
import axios from 'axios';
import { ListGroup, Accordion, Card, Button } from 'react-bootstrap'

class Weather extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     weather:[]
  //   }
  // }

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
              <Card.Body>{this.props.weather.map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.date}  {value.description}</ListGroup.Item>
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
