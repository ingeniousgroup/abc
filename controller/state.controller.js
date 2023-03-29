import {State} from "../model/association.js";
export const save=async(request,response,next)=>{
    try {
        for (let object of request.body.states) {
        await State.create({ stateName: object.state });
        }
        return response.status(200).json({ message: "state saved" });
    }
    catch (err) {
       return response.status(500).json({ error: "Internal Server Error" });
    }

}
export const list = async (request, response, next) => {
    try {
        const list = await State.findAll();
        return response.status(500).json({ list: list, status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal server error", status: false });
    }
}
