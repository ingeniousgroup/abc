import {Property} from "../model/association.js";
export const addProperty=async(request,response,next)=>{
try{
   let property=await new Property(request.body);
   return response.status(200).json({ property, status: true });
}    
catch (err) {
    console.log(err)
    return response.status(500).json({ error: "Internal Server Error", status: false });
}
}