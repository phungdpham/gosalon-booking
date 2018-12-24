import React from 'react';

// reactstrap components
import {
  Row, Col, Container,
  UncontrolledCollapse, Button

} from "reactstrap";
import Group from './components/Forms/Services/Group';
import Service from './components/Forms/Services/Service';
import AllServices from './components/Forms/Services/ServicesByGroup';




class Services extends React.Component {
  render() {
    return (
      <>
        <Container>

          <Row>
            <Col md='12'>
              <Button outline color='primary' href='#collapseService' id='show-new-service' className='pull-right mr-5'>New Service</Button>
              <Button outline color='primary' href='#collapseGroup' id='show-new-group' className='pull-right'>New Group</Button>
            </Col>
          </Row>

          <Row>
            <Col md='12'>
              <UncontrolledCollapse toggler='show-new-group'>
                <Group />
              </UncontrolledCollapse>
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <UncontrolledCollapse toggler='show-new-service'>
                <Service />
              </UncontrolledCollapse>
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <AllServices />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Services;
