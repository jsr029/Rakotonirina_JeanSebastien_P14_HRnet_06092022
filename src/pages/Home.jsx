import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import DatePicker, { registerLocale } from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr"; // the locale you want
import Select from "react-select";
import states from '../data/state'
import { useDispatch } from 'react-redux'
import { employees } from '../actions/index'
import Modal from 'r-js-modal2'

registerLocale("fr", fr); // register it with the name you want

function Home() {
  const { control, formState, register, handleSubmit, reset } = useForm()
  const { errors } = formState
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)
  const defaultDate = null

  const options = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ];
  const statesArray = []
  states.map((n, index) => {
    return statesArray.push({ value: n.name, label: n.name })
  })

  const onSubmit = data => {
    const employeesStringify = JSON.stringify(data)
    const employeesParse = JSON.parse(employeesStringify)
    console.log(employeesParse)
    dispatch(employees(employeesParse))
    setShowModal(true)
    reset()
  }

  const [startDate, setStartDate] = useState(defaultDate);
  const [startDob, setStartDob] = useState(defaultDate);

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to='/viewcurrentemployees'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register('firstname', { required: "First Name is required" })}
          />
          {errors.firstname && <p style={{ color: 'red' }}> {errors.firstname.message}</p>}

          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" {...register('lastname', { required: "Last Name is required" })} />
          {errors.lastname && <p style={{ color: 'red' }}> {errors.lastname.message}</p>}

          <label htmlFor="dateofbirth">Date of Birth</label>
          <Controller
            control={control}
            name='dateofbirth'
            render={({ field }) => (
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                      {"<"}
                    </button>
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                      {">"}
                    </button>
                  </div>
                )}
                locale="fr"
                dateFormat="dd/MM/yyyy"
                selected={startDob}
                onChange={(date) => { setStartDob(date); field.onChange(date) }}
                required
              />

            )}
          />
          {errors.dateofbirth && <p style={{ color: 'red' }}> {errors.dateofbirth.message}</p>}

          <label htmlFor="startdate">Start Date</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name='startdate'
            render={({ field }) => (
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                      {"<"}
                    </button>
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                      {">"}
                    </button>
                  </div>
                )}
                locale="fr"
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => { setStartDate(date); field.onChange(date) }}
                required
              />
            )}
          />
          {errors.startdate && <p style={{ color: 'red' }}> {errors.startdate.message}</p>}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" {...register('street', { required: "Enter your Street" })} />
            {errors.street && <p style={{ color: 'red' }}> {errors.street.message}</p>}

            <label htmlFor="city">City</label>
            <input id="city" type="text" {...register('city', { required: "Enter your City" })} />
            {errors.city && <p style={{ color: 'red' }}> {errors.city.message}</p>}

            <label htmlFor="State">State</label>
            <Controller
              control={control}
              name='State'
              render={({ field }) => (
                <Select
                  {...register('State', { required: "Please, Choose a State" })}
                  className='StatesSelect'
                  options={statesArray}
                  onChange={(stat) => field.onChange(stat)}
                  selected={field.value}
                />
              )}
            />
            {errors.State && <p style={{ color: 'red' }}> {errors.State.message}</p>}


            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" type="number" {...register('zipcode', { required: "Please, put your zipcode" })} />
            {errors.zipcode && <p style={{ color: 'red' }}> {errors.zipcode.message}</p>}

          </fieldset>

          <label htmlFor="Departement">Departement</label>
          <Controller
            control={control}
            rules={{ required: true }}
            name='Departement'
            render={({ field }) => (
              <Select
                {...register('Departement', { required: "Please, Choose a Departement" })}
                className='react-select__option'
                options={options}
                onChange={(dep) => field.onChange(dep)}
                selected={field.value}
              />
            )}
          />
          {errors.Departement && <p style={{ color: 'red' }}> {errors.Departement.message}</p>}

          <div className='button'>
            <button type='submit' >Save</button>
          </div>
          <Modal show={showModal} onClickCloseBtn={hideModal}>
            <h1>Employee saved !</h1>
          </Modal>
        </form>
      </div>
    </>
  )
}


export default Home