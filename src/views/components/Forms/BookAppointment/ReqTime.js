import React from 'react';
import ReactDatetime from 'react-datetime';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Progress,
  Row,
  Col
} from "reactstrap";

class ReqTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: ''
    };
  }
  render() {
    return (
      <>
        <h5 className='info-text'>Please select your date and time</h5>
        <Row className='justify-content-center'>
          <Col md='4'>
            <Card>
              <CardBody>
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: 'form-control',
                      placeholder: "Select Date"
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
                <FormGroup>
                  <ReactDatetime
                    dateFormat={false}
                    inputProps={{
                      className: "form-control",
                      placeholder: "Time Picker Here"
                    }}
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
};

export default  ReqTime;