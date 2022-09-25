const EmployeeTable = ({employees}) => {
    return (
        <div className="employeesTable">
            {employees.map(employee => (
                <div className="employee" key={employee.firstname}>
                    {employee.firstname}
                </div>
            ))}
        </div>
    )
}
export default EmployeeTable