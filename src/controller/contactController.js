const {contactCreate, contactEdit, contactDelete, contactsShow} = require('../services/contactService')

module.exports.createContact = function (req,res){

    const {name,phone,state} = req.body

    contactCreate(name,phone,state)
    .then((newContact) =>res.status(200).send(newContact))
    .catch((error) => res.status(400).send(error))
}

module.exports.editContact = function (req,res){

    const id = req.params.id
    const {name,phone,state} = req.body
    contactEdit(id,name,phone,state)
    .then((newContact) =>res.status(200).send(newContact))
    .catch((error) => res.status(400).send(error))
}

module.exports.deleteContact = function (req,res){
    const id = req.params.id
    console.log('id',id)
    contactDelete(id)
    .then(() =>res.status(200).send(true))
    .catch((error) => res.status(400).send(error))

}

module.exports.showContacts = function (req,res){
    
    contactsShow()
    .then((contacts) =>res.status(200).send(contacts))
    .catch((error) => res.status(400).send(error))
}