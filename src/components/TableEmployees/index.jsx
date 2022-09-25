import React, { useState } from "react";
import DataTable from 'react-data-table-component';
//import EmployeeTable from "../EmployeeTable";
import moment from "moment-jalaali";
import SearchBar from "../SerachBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function TableEmployees() {
    const employeesStore = useSelector(state => state.employeesReducer).data
    const filterEmployees = searchValue => {
        if (searchValue === '') {
            return employeesStore
        }
        return employeesStore.filter(employee => { 
            let result = false
            result = employee.firstname.toLowerCase().includes(searchValue.toLowerCase()) || 
            employee.lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.street.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.city.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.Departement.value.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.State.value.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.dateofbirth.includes(searchValue) ||
            employee.zipcode.toLowerCase().includes(searchValue.toLowerCase())
            return result
        })
        // employee.firstname.toLowerCase().includes(searchValue.toLowerCase()))
    }
    /* 
      - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
      - Here in this example, we have grouped our columns into two names. react-table is flexible enough to create grouped table names
    */
    const columns = [
        {
            name: "Firstname",
            selector: row => row.firstname,
            sortable: true
        },
        {
            name: "Lastname",
            selector: row => row.lastname,
            sortable: true
        },
        {
            name: "Start Date",
            selector: row => row.startdate,
            format: (row) => moment(row.startdate).format('DD/MM/YYYY'),
            sortable: true
        },
        {
            name: "Department",
            selector: row => row.Departement.value,
            sortable: true
        },
        {
            name: "Date of Birth",
            selector: row => row.dateofbirth,
            format: (row) => moment(row.dateofbirth).format('DD/MM/YYYY'),
            sortable: true
        },
        {
            name: "Street",
            selector: row => row.street,
            sortable: true
        },
        {
            name: "City",
            selector: row => row.city,
            sortable: true
        },
        {
            name: "State",
            selector: row => row.State.value,
            sortable: true
        },
        {
            name: "Zip Code",
            selector: row => row.zipcode,
            sortable: true
        }

    ]
    const [employees, setEmployees] = useState(employeesStore)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const filteredEmployees = filterEmployees(searchValue)
        setEmployees(filteredEmployees)
    }, [searchValue])
    return (
        <>
            <h2>Search</h2><SearchBar callback={(searchValue) => setSearchValue(searchValue)} />
            <div className="App">
                <DataTable
                    columns={columns}
                    data={employees}
                    pagination
                    subHeader
                />
            </div>
        </>
    );
}

export default TableEmployees