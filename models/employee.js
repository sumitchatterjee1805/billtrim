const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employee = new Schema({
    "info": {
        "pan_number": {type: String, required: true, unique: true, dropDups: true},
        "salutation": {type: String, required: true},
        "first_name": {type: String, required: true},
        "last_name": {type: String, required: true},
        "dob": {type: Date, required: true},
        "gender": {type: String, required: true},
        "email": {type: String, required: true},
        "phone": {type: String, required: true},
        "marital_status": {type: String, required: true},
        "spouse_name": {type: String, required: false},
        "no_of_children": {type: String, required: false},
        "father_name": {type: String, required: true},
        "mother_name": {type: String, required: true},
        "address": {
            "address_line_one": {type: String, required: true},
            "address_line_two": {type: String, required: false},
            "city": {type: String, required: true},
            "state": {type: String, required: true},
            "pin": {type: String, required: true},
            "landmark": {type: String, required: false}
        },
        "linkedin_url": {type: String, required: false},
        "fb_url": {type: String, required: false},
        "address_doc_link": {type: String, required: false},
        "resume_link": {type: String, required: false},
        "ex-org_payslip_link": {type: Array, required: false},
        "contacts": {
            "emergency_contact": {
                "name": {type: String, required: true},
                "phone": {type: String, required: true},
                "address": {type: String, required: true},
                "relation": {type: String, required: true}
            },
            "references": {type: Array, required: false}
        },
        "vehicle": {type: Array, required: false}
    },
    "salary": {
        "basic": {type: Number, required: true},
        "hra": {type: Number, required: true},
        "allowances": {type: Number, required: true}
    }
});

const Employee = mongoose.model("employee", employee);

module.exports = Employee;