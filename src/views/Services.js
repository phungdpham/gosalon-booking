import React from 'react';

// reactstrap components
import {
  Card, CardHeader, CardBody,
  Row, Col,
  UncontrolledCollapse, Button

} from "reactstrap";
import Group from './components/Forms/Services/Group';
import Service from './components/Forms/Services/Service';
import AllServices from './components/Forms/Services/ServicesByGroup';




class Services extends React.Component {
  render() {
    return (
      <>
        {/* <div className='content'> */}
        <div>
          <Row>
            <Col className="mt-0 ml-auto mr-auto" md="12">
              <Card>
                <CardHeader className='position-sticky'>
                  <Row>
                    <Col size='6'>
                      <h2 className='pt-2'><strong>Service List</strong></h2>
                    </Col>
                    <Col size='6'>
                      <Button color='success' href='#collapseService' id='show-new-service' className=' btn-round pull-right'>New Service</Button>
                      <Button outline color='success' href='#collapseGroup' id='show-new-group' className='btn-round pull-right'>New Group</Button>
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

                </CardHeader>
                <CardBody className='ml-5 mr-5'>
                  <AllServices />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* </div> */}
        </div>
      </>
    )
  }
}

export default Services;
