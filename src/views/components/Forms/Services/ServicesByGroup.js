import React from 'react';
import { 
  Row, Col, Container,
  Card, CardHeader, CardBody,
  ListGroup, ListGroupItem, 
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Button, Collapse 

} from 'reactstrap';

class servicesByGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ['groupOne']
    };
  }

  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };


  render() {
    return (

      <div
        aria-multiselectable={true}
        className='card-collapse'
        id='accordion'
        role='tablist'
      >
        <Card className='mx-auto'>
          <CardHeader role='tab' className='heading h5 mt-0 pt-0'>
            <a
              aria-expanded={this.state.openedCollapses.includes('groupOne')}
              href='#pablo'
              data-parent='#accordion'
              data-toggle='collapse'
              onClick={(e) => { e.preventDefault(); this.collapsesToggle('groupOne') }}
            >
              Manicure
              <i className="nc-icon nc-minimal-down" />
            </a>
          </CardHeader>
          <Collapse
            role='tabpanel'
            isOpen={this.state.openedCollapses.includes('groupOne')}
            className=' mt-0 pt-0'
          >
            <CardBody className='mt-0 pt-0'>
              <ListGroup flush>
                <ListGroupItem>
                  <p>
                    <span className='mr-5'>Classic Manicure</span>
                    <span className='ml-5'>$ 30</span>
                    <span>
                      <UncontrolledDropdown  className='pull-right'>
                        <DropdownToggle  caret color='success'>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </span>
                  </p>
                  <p>Here is the description for this service</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    <span className='mr-5'>Deluxe Manicure</span>
                    <span className='ml-5'>$ 30</span>
                    <span>
                    <UncontrolledDropdown className='pull-right'>
                        <DropdownToggle caret color='success'>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </span>
                  </p>
                  <p>Here is the description for this service</p>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Collapse>
        </Card>

        <Card className='mx-auto'>
          <CardHeader role='tab' className='heading h5 mt-0 pt-0'>
            <a
              aria-expanded={this.state.openedCollapses.includes('groupTwo')}
              href='#pablo'
              data-parent='#accordion'
              data-toggle='collapse'
              onClick={(e) => { e.preventDefault(); this.collapsesToggle('groupTwo') }}
            >
              Pedicure
            <i className="nc-icon nc-minimal-down" />
            </a>
          </CardHeader>
          <Collapse
            role='tabpanel'
            isOpen={this.state.openedCollapses.includes('groupTwo')}
          >
            <CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <p>
                    <span className='mr-5'>Classic Pedicure</span>
                    <span className='ml-5'>$ 30</span>
                    <span>
                    <UncontrolledDropdown className='pull-right'>
                        <DropdownToggle caret color='success'>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </span>
                  </p>
                  <p>Here is the description for this service</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    <span className='mr-5'>Deluxe Pedicure</span>
                    <span className='ml-5'>$ 30</span>
                    <span>
                    <UncontrolledDropdown className='pull-right'>
                        <DropdownToggle caret color='success'>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </span>
                  </p>
                  <p>Here is the description for this service</p>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default servicesByGroup;