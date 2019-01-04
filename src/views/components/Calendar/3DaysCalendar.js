import React from "react";
import './calendar.css';
// react component used to create a calendar with events on it
import BigCalendar from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

import{ events } from '../../../variables/general';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
    };
  }
  selectedEvent = event => {
    alert(event.title);
  };


  eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  };
  render() {
    return (
      <>
        <div className="content">
          {this.state.alert}
          <Row>
            <Col className="mt-0 ml-auto mr-auto" md="12">
              <Card className="card-calendar">
                <CardBody>
                  <BigCalendar
                    style={{height: '800px'}}
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    views={['week', 'day']}
                    defaultView="week"
                    min={new Date('1970, 1, 1, 08:00')}
                    max={new Date('1970, 1, 1, 19:00')}
                    step='15'
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={event => this.selectedEvent(event)}
                    onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                    eventPropGetter={this.eventColors}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Calendar;
