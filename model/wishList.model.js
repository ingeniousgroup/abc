import sequelize from "../db/dbconfig.js";
import{DataTypes}from "sequelize";
const WishList=sequelize.define("wishList",{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
});
sequelize.sync().then(()=>{
    console.log(" wishList table cretae");
}).catch(err=>{
    console.log(err);
});
export default WishList;