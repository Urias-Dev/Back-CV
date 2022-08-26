import { SkillModel} from "../models/skill.model.js"

 class  skillQueries{

    async create(data) {
          try  {
             const  query   = await SkillModel.create(data);
             if (query) {
                 return {ok: true, data: query}
             } else  {
                 return {ok: false, data: null }
             }
         } catch (e) {
              console.log("error al ejecutar query" ,   e)
         }
    }

    async  delete(condition = {}) {
        try {
            const  query =  await SkillModel.destroy({where: condition});
            if (query) {
                return {ok: true, data: query}
            }
            else{
                return {ok: false, data: null}
            }

          } catch (e) {
            console.log("error en queryy", e)
        }
    }

     async update (data, condition = {}) {
        try {
            const query = await SkillModel.update( data, {where: condition})
            if (query)   {
                return {ok: true, data: query}
            }  else {
                return {ok: false, data: null }
            }
        }catch (e) {
            console.log("erorre end queeu", e)
        }
    }

     async  findOne ( condition = {} ) {
         try {
             const query = await   SkillModel.findOne( {where: condition })
             if (query ) {
                 return {ok: true,  data:  query}
             } else  {
                 return  {ok: false, data: null}
             }
         } catch (e) {
             console.log(" fErrorr en queryf", e)
         }
     }

    async  find( ) {
        try {
             const query = await  SkillModel.findAll()
            if (query) {
                return {ok: true,  data: query}
            } else  {
                return  {ok: false, data: null}
            }
        } catch (e) {
            console.log(" fErrorr en queryf", e)
        }
    }
 }

export const  SkillQueries = new  skillQueries();