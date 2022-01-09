//models
import Employee from "../models/employee.js";

export const createDepartment = async (req, res, next) => {
  try {
    validationErrorHandler(req, next);
    const { d_name, employeeId } = req.body;

    const preExistingDepartment = await Employee.findOne({
      where: {
        d_name,
        employeeId,
      },
    });
    if (preExistingEmployee) {
      const error = new Error("Employee already Exists!");
      error.statusCode = 403;
      return next(error);
    }
    const response = await Department.create({
      d_name,
      employeeId,
    });
    res.status(201).json({
      message: "Department details created successfully",
      response,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
