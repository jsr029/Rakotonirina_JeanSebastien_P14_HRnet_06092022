import React from 'react'
import { useSelector } from 'react-redux'

function EmployeesList() {
    const employeesStore = useSelector(state => state.employeesReducer)
    return (
        <React.Fragment>
            <div className='employees-list'>

                {employeesStore.data.map((a, b) =>
                        (
                            <div className='employees-list' key={b+1}>
                                <ul>
                                    <li>firstname: {a.firstname}</li>
                                </ul>
                            </div>
                        )
                )}
            </div>
        </React.Fragment>
    )
}

export default EmployeesList
