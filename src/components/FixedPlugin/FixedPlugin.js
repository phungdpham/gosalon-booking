import React, { Component } from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

import { Button } from "reactstrap";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div className='button-container' onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">OPTIONS</li>

            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/paper-dashboard-pro-react"
                color="primary"
                block
                className="btn-round"
              >
                <i className="nc-icon nc-paper" /> register

              </Button>
            </li>
            <li className="button-container">
              <Button
                href="https://demo.creative-tim.com/paper-dashboard-pro-react/#/documentation/tutorial"
                color="default"
                block
                className="btn-round"
                outline
              >
                <i className="nc-icon nc-calendar-60" /> Book Appointment
              </Button>
            </li>

            <li className="header-title">SIDEBAR MINI</li>
            <li className="adjustments-line">
              <div className="togglebutton switch-sidebar-mini">
                <Switch
                  onChange={this.props.handleMiniClick}
                  value={this.props.sidebarMini}
                  onColor="info"
                  offColor="info"
                />
              </div>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
