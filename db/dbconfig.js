import { Sequelize } from "sequelize";
const sequelize =new Sequelize("rental_housing","root","riya@123",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(()=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err);
})

export default sequelize;