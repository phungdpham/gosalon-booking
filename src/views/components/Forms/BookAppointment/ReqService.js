import React from 'react'

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

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

class ReqServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reqServices: []
    };
  }
  render() {
    return (
      <>
        <h5 className='info-text'>Select service</h5>
        <Row>
          <Col lg='5' md='6' sm='3'>
            <Card>
              <Select
                className="react-select info"
                classNamePrefix="react-select"
                placeholder="Choose City"
                name="reqServices"
                closeMenuOnSelect={false}
                isMulti
                value={this.state.reqServices}
                onChange={value =>
                  this.setState({ reqServices: value })
                }
                options={[
                  {
                    value: "",
                    label: " Select one or more",
                    isDisabled: true
                  },
                  { value: "2", label: "Manicure " },
                  { value: "3", label: "Pedicure" },
                  { value: "4", label: "Wax" },
                  { value: "5", label: "Massage" },

                ]}
              />
            </Card>
          </Col>
        </Row>
      </>
    )
  }
};

export default ReqServices;