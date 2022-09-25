const initialState = {
    firstname: 'Jean-Sebastien',
    lastname: 'Rakotonirina',
    street: '13C Rue Charles Gounodetage 2 porte droite',
    city: 'Quimper',
    zipcode: '29000',
    dateofbirth: '2022-09-06T22:00:00.000Z',
    startdate: '2022-09-09T22:00:00.000Z',
    State: {
      value: 'Arkansas',
      label: 'Arkansas'
    },
    Departement: {
      value: 'Sales',
      label: 'Sales'
    }
  }


const employeesReducer = (state = { data: [initialState] }, action) => {
    switch (action.type) {
        case 'EMPLOYEES':
            return {
                data: [
                    ...state.data,
                    {
                        ...action.payload
                    }
                ]
            }
        default:
            return state;
    }
};

export default employeesReducer;
//[...state.filter(p => p.id !== action.payload.product_id), action.payload]