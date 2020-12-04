const Contact = require('../models/contactModel') 

module.exports.contactCreate = function(name, phone, state){
    return new Promise((resolve,reject) => {
        const contact = new Contact({
            name,
            phone,
            state
        })
        contact.save()
        .then((newContact) => {
            console.log(newContact)
            resolve(newContact)})
        .catch((error) => reject(error))
            
    })
    
}

module.exports.contactEdit = function(id, name, phone, state){
    return new Promise((resolve,reject) => {
        Contact.findByIdAndUpdate(id,{
            name,
            phone,
            state
        })
        .then(() =>{
            let data ={
                _id:id,
                name,
                phone,
                state
            } 
            resolve(data)})
        .catch((error) => {
            console.log('error',error)
            reject(error)
            }
        )            
    })
}

module.exports.contactDelete = function(id){
    return new Promise((resolve,reject) => {
        Contact.findByIdAndDelete(id)
        .then(() => resolve(true))
        .catch((error) => reject(error)) 
    })
}

module.exports.contactsShow = function(){
    return new Promise((resolve,reject) => {
        Contact.find()
        .then((contacts) => resolve(contacts))
        .catch((error) => reject(error)) 
    })
}