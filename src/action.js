export const addContact = (payload) => ({
    type: "ADD_CONTACT",
    payload
})

export const deleteContact = (id) => ({
    type: "DELETE_CONTACT",
    id
})