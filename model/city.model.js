import sequelize from "../db/dbconfig.js";
import{DataTypes}from "sequelize";
const City=sequelize.define("city",{
 cityName:{
    type:DataTypes.STRING,
    allowNull:false
 }
});
sequelize.sync().then(()=>{
    console.log("city table creted");
}).catch();
export default City;