import express from "express";

import { body } from "express-validator";

const router = express.Router();

import { createEmployee } from "../controllers/create-employee.js";
import { createDepartment } from "../controllers/create-department.js";

import { getAllEmployees } from "../controllers/get-all-employee.js";

// CREATE Employee
router.post("/addemployee", [
  body("name").not().isEmpty().trim().escape().withMessage("name is required"),
  body("email")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("email is required"),
  body("address")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("address is required"),
  createEmployee,
  body("contact_no")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("contact_no is required"),
]);

// CREATE department
router.post("/adddepartment", [
  body("d_name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("d_name is required"),
  body("employeeId")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("employeeiD is required"),
  createDepartment,
]);

//GET ALL EMPLOYEE WITH DEPARTMENT DETAILS

router.get("/getallemployee", getAllEmployees);

export default router;
