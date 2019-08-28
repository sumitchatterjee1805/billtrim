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

        return res.status(200).json({
            "message": "success"
        });
    });
};

exports.patchEmployee = (req, res, next) => {
    const emp_id = req.params.employee_id;
    Employee.findById(emp_id, (err, result) => {
        if (err)
            return res.status(500).json({
                "message": err
            });
        const arr = Object.keys(req.body);
        arr.forEach(e => {
            result.info[e] = req.body[e];
        });
        Employee.update({ "_id": emp_id }, result, err => {
            if (err)
                return res.status(500).json({
                    "message": err
                });

            return res.status(200).json({
                "message": "success"
            });
        });
    })
};

exports.deleteEmployee = (req, res, next) => {
    const emp_id = req.params.employee_id;
    Employee.deleteOne({ "_id": emp_id }, err => {
        if (err)
            return res.status(500).json({
                "message": err
            });

        return res.status(200).json({
            "message": "success"
        });
    })
};