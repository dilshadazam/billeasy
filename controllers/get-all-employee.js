//models
import Employee from "../models/employee.js";
import Department from "../models/department.js";

import pkg from "sequelize";
import sequelize from "../utilities/database.js";
const { QueryTypes } = pkg;

export const getAllEmployees = async (req, res, next) => {
  try {
    const details = await sequelize.query(
      "SELECT employees.id,employees.name,employees.email,employees.address,employees.contact_no,employees.createdAt as employeedetails,departments.id,departments.d_name,departments.createdAt FROM employee,departments WHERE employees.id=departments.employeeid",
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      message: `All Employess fetched with department name`,
      getAllEmployees: details,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
