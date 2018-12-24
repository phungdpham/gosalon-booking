import React from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, Button } from 'reactstrap';

class servicesByGroup extends React.Component {
  render() {
    return (
      <div>
        <Card className='ml-5 mr-5'>
          <CardHeader>
            <h3><strong>Manicure</strong></h3>
          </CardHeader>
          <CardBody className='ml-5 mr-5'>
            <ListGroup flush>
              <ListGroupItem>
                <p>
                  <span className='mr-5'><strong>Classic Manicure</strong></span>
                  <span className='ml-5'>$ 30</span>
                  <span>
                    <Button className="btn-icon btn-round pull-right" color="success" size="md">
                      <i className="fa fa-edit"></i>
                    </Button>{` `}
                    <Button className="btn-icon btn-round pull-right" color="danger" size="md">
                      <i className="fa fa-times" />
                    </Button>
                  </span>
                </p>
                <p>Here is the description for this service</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  <span className='mr-5'><strong>Deluxe Manicure</strong></span>
                  <span className='ml-5'>$ 30</span>
                  <span>
                    <Button className="btn-icon btn-round pull-right" color="success" size="md">
                      <i className="fa fa-edit"></i>
                    </Button>{` `}
                    <Button className="btn-icon btn-round pull-right" color="danger" size="md">
                      <i className="fa fa-times" />
                    </Button>
                  </span>
                </p>
                <p>Here is the description for this service</p>
              </ListGroupItem>
            </ListGroup>

          </CardBody>
        </Card>

        <Card className='ml-5 mr-5'>
          <CardHeader>
            <h3><strong>Pedicure</strong></h3>
          </CardHeader>
          <CardBody className='ml-5 mr-5'>
            <ListGroup flush>
              <ListGroupItem>
                <p>
                  <span className='mr-5'><strong>Classic Pedicure</strong></span>
                  <span className='ml-5'>$ 30</span>
                  <span>
                    <Button className="btn-icon btn-round pull-right" color="success" size="md">
                      <i className="fa fa-edit"></i>
                    </Button>{` `}
                    <Button className="btn-icon btn-round pull-right" color="danger" size="md">
                      <i className="fa fa-times" />
                    </Button>
                  </span>
                </p>
                <p>Here is the description for this service</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  <span className='mr-5'><strong>Deluxe Pedicure</strong></span>
                  <span className='ml-5'>$ 30</span>
                  <span>
                    <Button className="btn-icon btn-round pull-right" color="success" size="md">
                      <i className="fa fa-edit"></i>
                    </Button>{` `}
                    <Button className="btn-icon btn-round pull-right" color="danger" size="md">
                      <i className="fa fa-times" />
                    </Button>
                  </span>
                </p>
                <p>Here is the description for this service</p>
              </ListGroupItem>
            </ListGroup>

          </CardBody>
        </Card>
      </div>
    )
  }
}

export default servicesByGroup;