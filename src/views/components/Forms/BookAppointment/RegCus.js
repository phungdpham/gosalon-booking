import React from 'react';
import classnames from 'classnames';
//reactstrap components
import {
  Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col
} from 'reactstrap';

class RegCustomer extends React.Component {
  constructor(props) {
    this.state = {
      firstName: "",
      phone: "",
      firstNameState: "",
      phoneState: "",
    };
  }

  //Verify phone number
  verifyPhone = value => {
    var phoneRex = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneRex.test(value)) {
      return true;
    }
    return false;
  };

  //function that verifies if a string has given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case 'phone':
        if (this.verifyPhone(event.target.value)) {
          this.setState({ [stateName + "State"]: 'has-success' });
        } else {
          this.setState({ [stateName + "State"]: 'has-danger' });
        }
        break;
      case 'length':
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + 'State']: 'has-success' });
        } else {
          this.setState({ [stateName + 'State']: 'has-danger' });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }

  isValidated = () => {
    if (
      this.state.firstNameState === 'has-success' &&
      this.state.phoneState === 'has-success'
    ) {
      return true;
    } else {
      if (this.state.firstNameState !== 'has-success') {
        this.setState({ firstNameState: 'has-danger' })
      }
      if (this.state.phoneState !== 'has-success') {
        this.setState({ phoneState: 'has-danger' })
      }
      return false;
    }
  };
  render() {
    return (
      <>
        <h5 className='info-text'>Customer Information</h5>
        <Row className='justify-content-center'>
          <Col sm='6'>
            <InputGroup
              className={classnames(this.state.firstNameState, {
                'input-group-focus': this.state.firstNameFocus
              })}
            >
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <i className='nc-icon nc-single-02' />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name='firstName'
                placeholder='First Name (required)'
                type='text'
                onChange={e => this.change(e, 'fistName', 'length', 1)}
                onFocus={e => this.setState({ firstNameFocus: true })}
                onBlur={e => this.setState({ firstNameFocus: false })}
              />
              {this.state.firstNameState === 'has-danger' ? (
                <label className='error'>This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup>
              className={classnames(this.state.phoneState, {
                "input-group-focus": this.state.emailFocus
              })}
              >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-send" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="phone"
                placeholder="Phone (required)"
                type="phone"
                onChange={e => this.change(e, "phone", "phone")}
                onFocus={e => this.setState({ phoneFocus: true })}
                onBlur={e => this.setState({ phoneFocus: false })}
              />
              {this.state.phoneState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default RegCustomer;