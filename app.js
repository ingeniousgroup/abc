import express from "express";
import bodyParser  from "body-parser";
import stateRouter from"./router/state.router.js";
import cityRouter from "./router/city.router.js";
import userRouter from "./router/user.router.js";
import AdminRouter from "./router/admin.router.js";
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userRouter);
app.use("/state",stateRouter);
app.use("/city",cityRouter);
app.use("/admin",AdminRouter);

app.listen(4000,()=>{
    console.log("server started");
});