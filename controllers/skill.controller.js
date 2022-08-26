import { SkillQueries} from "../queries/skill.queries.js";
import {request , response } from "express" ;
import { Payload} from "../helpers/payload.js";

 class SkillController {

    async   createSkill ( request,  response ) {
        const body =  request.body;
        console.log(body )
        const query = await SkillQueries.create(body);

        if (query.ok ) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async  deleteSkill (request, response) {
        const id =  request.params.id


          const query = await  SkillQueries.delete({
              id:  id
          });

        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        }  else {
            return response.status(403).json({ok: false, data: null})
        }
    }

    async  updateSkill  (request, response) {
        const body = request. body
         const id = request.params.id;
        const query  = await SkillQueries.update(body, {
            id:  id
        })


        if (query ) {
            return response.status(200).json({ok: true, data:  query.data })
         } else {
            return response.status(403).json({ok: false, data: null})
        }
      }

    async   findOneSkill (request, response ) {
         const  body = request.body
          const   id = request.params.id;
         console.log(body )
         const query = await SkillQueries.findOne   ({
             id: id
         })

         if (query) {
             return response.status(200).json({ok: true, data: query.data })
         } else {
             return  response.status(403).json({ok: false, data:   null })
         }
    }


     async   findSkill (request, response) {
        const  body = request.body
        console.log(body)
        const query = await SkillQueries.find ()

        if (query) {
            return response.status(200).json({ok: true, data: query.data})
        } else {
            return  response.status(403).json({ok: false, data:   null })
        }
     }
  }

export const skillController = new  SkillController() ;

