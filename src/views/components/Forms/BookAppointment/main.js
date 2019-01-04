import React from 'react';
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";


//wizard steps
import RegisterCustomer from './RegCus';
import ReqTime from './ReqTime';
import ReqServices from './ReqService';

var steps =[
  {
    stepName: 'Customer Information',
    stepIcon: 'nc-icon nc-single-02',
    component: RegisterCustomer
  },
  {
    stepName: 'Select Time',
    stepIcon: 'nc-icon nc-touch-id',
    component: ReqTime
  },
  {
    stepName: 'Select Date',
    stepIcon: 'nc-icon nc-pin-3',
    component: ReqServices
  }
];

class BookAppointment extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Col className='mr-auto ml-auto' md='10'>
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title='Book New Appointment'
              headerTextCenter
              finishButtonClasses='btn-wd'
              nextButtonClasses='btn-wd'
              previousButtonClasses='btn-wd'
            />
          </Col>
        </div>
      </>
    )
  }
}

export default BookAppointment;