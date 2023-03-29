import sequelize from "../db/dbconfig.js";
import{DataTypes}from "sequelize";
const State=sequelize.define("state",{
 stateName:{
    type:DataTypes.STRING,

 }
});
sequelize.sync().then(()=>{
    console.log("state table creted");
}).catch();
export default State;