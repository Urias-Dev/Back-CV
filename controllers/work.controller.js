import { WorkQueries } from "../queries/work.queries.js";
import {request , response} from "express" ;
import { Payload  } from "../helpers/payload.js";

class WorkController {
    async  createWork ( request,  response ) {
        const body =  request.body;
        console.log(body )
        const query = await WorkQueries.create(body);

        if (query) {
            return response. status(200).json({ok: true, data: query})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async  deleteWork (request, response) {
        const id = request.params.id
        console.log( id )
          const query = await WorkQueries.delete({
            id:  id
        });

        if (query) {
            return response.status(200).json({ok: true, data: query.data  })
        }  else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async updateWork  (request, response) {
        const body = request.body ;
        const id =  request.params.id
        const query  = await WorkQueries.update(body , {
            id:  id
        })
        if (query.ok) {
            return response.status(200).json({ok: true, data:  query.data })
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }


    async findWork  (request, response) {
        const  body = request.body
        console.log (body)
        const query = await WorkQueries.find()  ;
        if (query.ok ) {
            return response.status(200). json({ ok: true, data: query.data  })
        } else  {
            return response.status(403).json({ok: false, data: null, message: "No se encontro el datof" })
          }
    }

    async   findOneWork  (  request , response) {
        const id = request.params.id
        console.log ( id)
        const query = await  WorkQueries.findOne  ({
            id: id
        })

        if (query.ok) {
            return response.status(200).json({ ok: true,   data: query.data })
        } else   {
            return response.status(403).json({ok: false, data: null, message: " -No se encontro el datof" })
        }
    }

}

 export const workController = new  WorkController() ;

