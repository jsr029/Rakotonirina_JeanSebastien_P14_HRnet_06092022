import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Table from '../Table';
import Moment from 'moment-jalaali'

function TableEmployees() {
    /* 
      - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
      - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
    */
    const employeesStore = useSelector((state) => state.employeesReducer).data

    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "Current Employees",
                // First group columns
                columns: [
                    {
                        Header: "Firstname",
                        accessor: "firstname"
                    },
                    {
                        Header: "Lastname",
                        accessor: "lastname"
                    },
                    {
                        Header: "Start Date",
                        accessor: d => {
                            return Moment(d.startDate)
                              .local()
                              .format("DD/MM/YYYY")
                          }
                    },
                    {
                        Header: "Department",
                        accessor: "Departement.value",
                    },
                    {
                        Header: "Date of Birth",
                        accessor:  d => {
                            return Moment(d.dateofbirth)
                              .local()
                              .format("DD/MM/YYYY")
                          }
                    },
                    {
                        Header: "Street",
                        accessor: "street"
                    },
                    {
                        Header: "City",
                        accessor: "city"
                    },
                    {
                        Header: "State",
                        accessor: "State.value",
                   },
                    {
                        Header: "Zip Code",
                        accessor: "zipcode"
                    }
                ]
            }
        ],
        []
    );


    return (
        <div className="App">
            <Table columns={columns} data={employeesStore} />
        </div>
    );
}

export default TableEmployees