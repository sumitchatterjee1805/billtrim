const Employee = require('../models/employee');

exports.postEmployee = (req, res, next) => {
    const employee = new Employee({
        info: req.body.info,
        leaves: {},
        salary: req.body.salary
    });
    employee.save((err) => {
        if (err)
            return res.status(500).json({
                "message": err
            });
        //console.log("Saved successfully");
        return res.status(200).json({
            "message": "success"
        });
    });
};

exports.patchEmployee = (req, res, next) => {
    const emp_id = req.params.employee_id;
    Employee.findByIdAndUpdate({ "_id": emp_id }, {"info": req.body}, err => {
        if (err)
            return res.status(500).json({
                "message": err
            });
        return res.status(200).json({
            "message": "success"
        });
    });
};

exports.deleteEmployee = (req, res, next) => {

};