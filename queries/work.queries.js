import {WorkModel} from "../models/work.model.js"
import {UserModel} from "../models/user.model.js";

class workQueries  {

    async create(data) {
        try {
            const query  = await WorkModel.create(data);
            if (query) {
                return {ok: true, data: query}
            } else  {
                return {ok: false, data: null }
            }
        } catch (e) {
            console.log("error al ejecutar query" ,   e)
        }
    }

    async delete(condition = {}) {
        try {
            const  query =  await WorkModel.destroy({where: condition});
            if (query) {
                return {ok: true, data: query}
            }
            else{
                return {ok: false, data: null}
            }

        } catch (e) {
            console.log("error en que kryy", e)
        }
    }

    async  update (data, condition = {}) {
         try {
            const query = await  WorkModel.update( data, {where: condition})

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
        const query = await  WorkModel.findAll()

        if (query.length ===  0) {
            return {ok: false, data: null}
        } else {
            return {ok: true, data: query}
        }
    }

    async   findOne ( condition = {} ) {
        try {
            const query =   await WorkModel.findOne({where: condition } );

            if (query)  {
                return {ok: true,  data:query };
            }
        }  catch  (e ) {
            console.log("error  al  e jercutar query", e)
            return {ok: false, data :  null }
        }
    }
}

export const  WorkQueries = new  workQueries();