import React from 'react';
import { ListGroup } from 'react-bootstrap'

class DailyWeather extends React.Component {

  render(){
    return(
      <>
      {this.props.data.map((value, key) => (
        <ListGroup key={key}>
          <ListGroup.Item variant="info">{value.date}  {value.description}</ListGroup.Item>
        </ListGroup>
        ))}
      </>
    )
  }


}

export default DailyWeather;