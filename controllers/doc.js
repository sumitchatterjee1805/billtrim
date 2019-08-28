const fs = require('fs').promises;
const path = require('path');
const Employee = require('../models/employee');

exports.uploadDoc = (req, res, next) => {
    const emp_id = req.params.employee_id;
    const doc_name = req.body.name;
    const file_path = path.join( __filename, '..', 'uploads');
    res.send(req.file);
    // fs.writeFile(file_path, req.file)
    //     .then(result => {
    //         res.send('success');
    //     })
    //     .catch(err => {
    //         res.send('errr');
    //     })
    // Employee.findById(emp_id, (err, result) => {
    //     if (err)
    //         res.status(500).json({
    //             "message": err
    //         });
    //     let not_found = false;
    //     switch (doc_name) {
    //         case address_doc_link:
    //             result.address_doc_link = file_path;
    //             break;
    //         case resume_link:
    //             result.resume_link = file_path;
    //             break;
    //         case prev_org_payslip_link:
    //             result.prev_org_payslip_link.push(file_path);
    //             break;
    //         default:
    //             not_found = true;
    //             break;
    //     }
    //     if (!not_found)
    //         return res.json({
    //             "message": "success"
    //         });
    //     return res.status(500).json({
    //         "message": "File Name not valid"
    //     });
    // });
};