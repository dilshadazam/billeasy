import Sequelize from "sequelize";
import employee from "./employee.js";
import sequelize from "../utilities/database.js";

const Department = sequelize.define("department", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  d_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  employeeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: employee,
      key: "id",
    },
  },
  createdAt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Department;
