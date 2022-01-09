//models
import Employee from "../models/employee.js";

export const createEmployee = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name, email, address, contact_no } = req.body;
  try {
    const preExistingEmployee = await Employee.findOne({
      where: {
        name,
        email,
        address,
        contact_no,
      },
    });
    if (preExistingEmployee) {
      const error = new Error("Employee already Exists!");
      error.statusCode = 403;
      return next(error);
    }
    const response = await Employee.create({
      name,
      email,
      address,
      contact_no,
    });
    res.status(201).json({
      message: "Employee details created successfully",
      response,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
