import React from 'react';
import Calendar from './components/Calendar/Calendar';
import NewBooking from './components/Forms/BookAppointment/main';

// reactstrap components
import {
  Row, Col,
  Card, CardHeader, CardBody,
  UncontrolledCollapse, Button
} from "reactstrap";




class BookAppointment extends React.Component {
  render() {
    return (
      <>
        {/* <div className='content'> */}
        <Row>
          <Col className="mt-0 ml-auto mr-auto" md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col size='6'>
                    <h2 className='pt-2'><strong>Appointment</strong></h2>
                  </Col>
                  <Col size='6'>
                    <Button color='success' href='#collapseService' id='show-new-service' className=' btn-round pull-right'>Book New</Button>
                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
                    <UncontrolledCollapse toggler='show-new-group'>
                      <NewBooking />
                    </UncontrolledCollapse>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Calendar />
              </CardBody>
            </Card>
            {/* <Row>
            <Col md='12'>
            </Col>
          </Row> */}
            {/* </div> */}
          </Col>
        </Row>
      </>
    )
  }
}

export default BookAppointment;