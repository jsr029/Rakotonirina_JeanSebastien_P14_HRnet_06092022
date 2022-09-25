import { Link } from 'react-router-dom'
import React from 'react'

function EmployeeItem({ id, firstname, lastname, street, city, zipcode, dateofbirth, startdate, State, Departement }) {
return (
    <React.Fragment>
        <div className='employee-fiche'>
            <ul>
                <li>id: {id}</li>
                <li>firstname: {firstname}</li>
                <li>lastname: {lastname}</li>
                <li>street: {street}</li>
                <li>city: {city}</li>
                <li>zipcode: {zipcode}</li>
                <li>date of birth :{dateofbirth}</li>
                <li>startdate : {startdate}</li>
                <li>state: {State}</li>
                <li>Departement: {Departement}</li>
            </ul>
        </div>
    </React.Fragment>    
	)
}

export default EmployeeItem