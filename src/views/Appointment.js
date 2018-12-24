import React from 'react';
import Calendar from './components/Calendar/Calendar';

// reactstrap components
import { Row, Col } from "reactstrap";




class BookAppointment extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col md='12'>
            <Calendar />
          </Col>
        </Row>
      </>
    )
  }
}

export default BookAppointment;