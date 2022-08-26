import { EducationQueries } from "../queries/education.queries.js";
import {request , response} from "express" ;
import { Payload } from "../helpers/payload.js";
import req from "express/lib/request.js";

class EducationController {
    async  createEducation ( request,  response ) {
        const body =  request.body;
        console.log(body )
        const query = await EducationQueries.create(body);

        if (query) {
            return response.status(200).json({ok: true, data: query})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async deleteEducation (request, response) {
        const body = request.body
        console.log(body )

        const id = request.params.id
        console.log("ID eliminadoc:  ", id)

        const query = await EducationQueries.delete({
            id: id
        });

        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        }  else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async updateEducation  (request, response) {
        const body = request.body;
         const id =  request.params.id
        const query  = await  EducationQueries.update(body, {
            id: id
        })
        if (query.ok ) {
            return response.status(200).json({ok: true, data:  query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }



    async findEducation  (request, response) {
        const  body =  request.body
        console.log (body )
        const query = await EducationQueries.find()
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data  })
        } else  {
            return  response.status(403).json({ok: false, data: null,message: "No se encontro el datof" })
        }
    }

     async  findOneEducation  (request , response) {
        const id =  request.params.id
        console.log (id  )
        const query = await EducationQueries.findOne({
            id:  id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data  })
        } else  {
            return  response.status(403).json({ok: false, data: null, message: "No se encontro el datof" })
        }
    }
}


 export const educationController = new   EducationController() ;

