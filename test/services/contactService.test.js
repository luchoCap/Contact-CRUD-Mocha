const assert = require('assert');
const {contactCreate,contactEdit,contactDelete,contactsShow} = require('../../src/services/contactService')
describe("Template", () => {


    it('should create a contact ok ', async () => {
        let name='Luciano'
        let phone=123123
        let state=false

        const responseContact = await contactCreate(name,phone,state)

        assert.strictEqual(typeof responseContact._id, "object")
        assert.strictEqual(responseContact.name, "Luciano")
        assert.strictEqual(responseContact.phone, 123123)
        assert.strictEqual(responseContact.state, false)
    })

    it('should not create a contact with empty fields', async () => {

        return assert.rejects(
            contactCreate(null, null, null),
            {name: "ValidationError", message: "Contact validation failed: name: Path `name` is required."}
        )
    })

    it('should not create a contact with incorrect field phone', async () => {

        let name=32424
        let phone='abcde'
        let state='false'

        return assert.rejects(
            contactCreate(name, phone, state),
            {name: "ValidationError", message: 'Contact validation failed: phone: Cast to Number failed for value "abcde" at path "phone"'}
        )
    })

        
    

}
)