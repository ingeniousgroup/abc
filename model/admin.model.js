import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
let Admin = sequelize.define("admin", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
sequelize.sync().then(()=>{
    console.log(" admin table cretae");
}).catch(err=>{
    console.log(err);
});
export default Admin;