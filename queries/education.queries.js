import { EducationModel} from "../models/education.model.js"

class educationQueries  {

    async create(data) {
        try {
            const query  = await EducationModel.create(data);
            if (query) {
                return {ok: true, data: query}
            } else  {
                return {ok: false, data: null }
            }
        } catch  (e) {
            console.log("error al ejecutar query" ,   e)
        }
    }

    async delete(condition = {}) {
        try {
            const  query =  await EducationModel.destroy({where: condition});
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
        try   {
            const query = await  EducationModel.update( data, {where: condition})

            if (query)  {
                return {ok: true, data: query}
            }  else {
                return {ok: false, data: null}
            }
        }catch (e) {
            console.log("erorre end qmueeu", e)
        }
    }

    async  find() {
        const query = await  EducationModel.findAll ();
        if ( query) {
            return {ok: true, data: query}
        } else {
            return {ok:  false, data: null }
         }
    }


    async  findOne( condition = {}  ) {
        const query = await  EducationModel.findOne({where: condition});
        if ( query ) {
            return {ok: true, data:  query}
        } else {
            return {ok:  false, data: null }
        }
    }
}

export const  EducationQueries = new  educationQueries();