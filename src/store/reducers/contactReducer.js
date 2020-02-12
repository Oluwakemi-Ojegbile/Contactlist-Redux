const initState = {
    state: {
        contacts: [
          { id: 1, firstName: 'Taiwo', surName: 'Obafemi', email: 'taiwoObafemi@enyata.com', phone_number: '08022334443' },
          { id: 2, firstName: 'Segun', surName: 'Dare', email: 'segun@enyata.com', phone_number: '08028678443' },
        ]
      }
}

const contactReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
        return {
            ...state,
            contacts: [...state.contacts, action.payload]
        }
        case "DELETE_CONTACT":
            return { 
              ...state,
              contacts: state.contacts.filter(contact => contact.id !== action.id)
            }
        default:
            return state;
    }
}

export default contactReducer;