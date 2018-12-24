import React from 'react';

//reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter, CardTitle,
  Label,
  FormGroup, Form, Input, FormText,
  Row, Col
} from "reactstrap";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";



class serGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null
    };
  }
  render() {
    return (
      <>
        <Card className='ml-5 mr-5'>
          <CardHeader>
            <CardTitle tag='h4'>Services</CardTitle>
          </CardHeader>
          <CardBody>
            <Form action='#' method='#'>
              {/* <label>Service</label> */}
              <FormGroup>
                <Input id='service-name' placeholder='Enter Service' type='text' />
              </FormGroup>
              {/* <label>Group</label> */}
              <FormGroup>
                <Select
                  className="react-select primary"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={value =>
                    this.setState({ singleSelect: value })
                  }
                  options={[
                    { value: "2", label: "Manicure" },
                    { value: "3", label: "Pedicure" }
                  ]}
                  placeholder="Select Group"
                />              </FormGroup>
              {/* <label>Price</label> */}
              <FormGroup>
                <Input placeholder='Enter Service Price' type='text' />
              </FormGroup>
              <FormGroup>
                {/* <Label for="exampleText">Description</Label> */}
                <Input type="textarea" name="text" id="exampleText" placeholder='Add service description' />
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button className='btn-round pull-right' color='info' type='submit'>
              Add New Service
            </Button>
          </CardFooter>
        </Card>
      </>
    )
  }
};

export default serGroup;