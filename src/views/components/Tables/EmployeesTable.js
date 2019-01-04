import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// reactstrap components
import {
  Button, UncontrolledCollapse,
  Card, CardHeader, CardBody, CardTitle,
  Row, Col,
} from "reactstrap";


const dataTable = [
  ["Tiger Nixon", "Technician", "Active", "61"],
  ["Garrett Winters", "Technician", "Active", "63"],
  ["Ashton Cox", "Receptionist", "Active", "66"],
  ["Cedric Kelly", "Cashier", "Active", "22"],
  ["Airi Satou", "Technician", "Active", "33"],
  ["Brielle Williamson", "Integration Specialist", "Active", "61"],
  ["Herrod Chandler", "Technician", "Inactive", "59"],
  ["Rhona Davidson", "Technician", "Inactive", "55"],
  ["Colleen Hurst", "Javascript Developer", "Inactive", "39"],
  ["Sonya Frost", "Software Engineer", "Inactive", "23"],
];

class EmployeesTable
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \n"
                  );
                }}
                color="warning"
                size="sm"
                className="btn-icon btn-link edit"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link view"
              >
                <i className="fa fa-eye" />
              </Button>{" "}
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <>
          <Card>
            <CardBody className='mt-0 pt-0'>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Position",
                    accessor: "position"
                  },
                  {
                    Header: "Status",
                    accessor: "office"
                  },
                  {
                    Header: "Action",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationBottom
                style={{
                  height: '600px'
                }}
                /*
                  You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                */
                className="-striped -highlight primary-pagination"
              />
            </CardBody>
          </Card>

        </>
        );
      }
    }
    
    export default EmployeesTable;
