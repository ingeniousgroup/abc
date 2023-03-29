import { request, response } from "express";
import Admin from "../model/admin.model.js";
export const signUp = async (request, response, next) => {
    try {
        let admin = await Admin.create(request.body);
        return response.status(200).json({ admin: admin, status: true });
    }
    catch (err) {
        return response.status(500).json({ message: "internal server error", status: false });
    }
}
export const signIn = async(request, response, next) => {
    try {
        let admin =  await Admin.findOne({
            where: {
                email: request.body.email
            }
        });
        if (admin.password == request.body.password)
            return response.status(200).json({ message: "sign in success", status: true });
        return response.status(500).json({ message: "wrong email password", status: false });
    } catch (err) {
        return response.status(500).json({ message: "internal server error", status: false });
   }
}

export const viewBalance=async(request,response,next)=>{
    try {
        let admin =  await Admin.findOne({
            where: {
                email: request.body.email
            }
        });
        if (admin.password == request.body.password)
            return response.status(200).json({ balance: admin.balance, status: true });
        return response.status(500).json({ message: "wrong email password", status: false });
    } catch (err) {
        return response.status(500).json({ message: "internal server error", status: false });
   }
}
