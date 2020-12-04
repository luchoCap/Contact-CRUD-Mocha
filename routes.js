const express = require('express')

const {
    createContact,
    editContact,
    deleteContact,
    showContacts
} = require('./src/controller/contactController')

const router = express.Router();

router.get('/api/contact',  showContacts);
router.post('/api/contact', createContact);
router.put('/api/contact/:id', editContact);
router.delete('/api/contact/:id', deleteContact);

module.exports = router;