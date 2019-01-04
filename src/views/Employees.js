import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// reactstrap components
import {
  Button, UncontrolledCollapse,
  Card, CardHeader, CardBody, CardTitle,
  Row, Col,
} from "reactstrap";

//component
import NewEmployee from './components/Forms/Employees/NewEmployee';
import Employees from './components/Tables/EmployeesTable';

class ReactTables extends React.Component {
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
                    <h2><strong>Employees</strong></h2>
                  </Col>
                  <Col size='6'>
                    <Button outline color='success' href='#collapseNewEmployee' id='add-new-employee' className='btn-round pull-right'>New Employee</Button>

                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
                    <UncontrolledCollapse toggler='add-new-employee'>
                      <NewEmployee />
                    </UncontrolledCollapse>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className='mt-0 pt-0'>
                <Employees />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* </div> */}
      </>
    );
  }
}

export default ReactTables;
