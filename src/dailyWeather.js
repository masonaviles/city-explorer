import React from 'react';
import { ListGroup } from 'react-bootstrap'

class DailyWeather extends React.Component {

  render(){
    return(
      <>
        <ListGroup key={this.props.index}>
          <ListGroup.Item variant="info">{this.props.date}  {this.props.description}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }


}

export default DailyWeather;