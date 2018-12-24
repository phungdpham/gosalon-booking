import React from 'react';

//reactstrap components
import {
  Button,
  Card, CardHeader, CardBody, CardFooter, CardTitle,
  FormGroup, Form, Input
} from "reactstrap";

class serGroup extends React.Component {
  render() {
    return(
      <>
        <Card className='ml-5 mr-5'>
          <CardHeader>
            <CardTitle tag='h4'>Add New Service Group</CardTitle>
          </CardHeader>
          <CardBody>
            <Form action='#' method='#'>
              <label>Group</label>
              <FormGroup>
                <Input id='service-group-name' placeholder='Enter Group Name' type='text' />
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button id='add-new-group' className='btn-round pull-right' color='info' type='submit'>
              Add New Group
            </Button>
          </CardFooter>
        </Card>
      </>
    )
  }
};

export default serGroup;