import React from 'react';

//reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter, CardTitle,
  FormGroup, Form, Input,
  Row, Col
} from "reactstrap";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";



class newEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPosition: null,
      selectStatus: null
    };
  }
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Employee</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Input id='first-name' placeholder='First name' type='text' />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Input id='last-name' placeholder='Last name' type='text' />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      name="selectPosition"
                      value={this.state.selectPosition}
                      onChange={value =>
                        this.setState({ selectPosition: value })
                      }
                      options={[
                        { value: "2", label: "Technician" },
                        { value: "3", label: "Manager" },
                        { value: "2", label: "Receptionist"}
                      ]}
                      placeholder="Select Position"
                    />              
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      name="selectStatus"
                      value={this.state.selectStatus}
                      onChange={value =>
                        this.setState({ selectStatus: value })
                      }
                      options={[
                        { value: "2", label: "Active" },
                        { value: "3", label: "Inactive" }
                      ]}
                      placeholder="Select Status"
                    />              
                  </FormGroup>                 
                </Col>
              </Row>

            </Form>
          </CardBody>
          <CardFooter>
            <Button className='btn-round pull-right' color='info' type='submit'>
              Add New Employee
            </Button>
          </CardFooter>
        </Card>
      </>
    )
  }
};

export default newEmployee;