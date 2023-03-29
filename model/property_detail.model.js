import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../db/dbconfig.js";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 
if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'/'+mm+'/'+yyyy;
const Property=sequelize.define("property",{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rent:{
        type:INTEGER,
        allowNull:false
    },
    available_date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    houseCategory:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imageArray:{
        type:DataTypes.STRING(1000),
        allowNull:false
    },
    latitude:{
        type:DataTypes.STRING,
        allowNull:false
    },
    longitude:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
       type:DataTypes.STRING,
       defaultValue: today

    }
});
sequelize.sync().then(()=>{
    console.log("property table created");
}).catch();
export default Property;