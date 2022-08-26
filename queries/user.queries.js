 import {UserModel  } from "../models/user.model.js"
 import {raw, response} from "express";
 import {encrypt} from "../helpers/handleBcrpt.js";


 class userQueries  {
     async store (    user){
         try    {
             const query  = await UserModel.create(user) ;
             if (query) {
                 return {ok: true, data: query };
              }
         }  catch  (e) {
                 console.log(' error   al  ejecutar query ',e );
                return {ok: false, data: null   }
         }
      }


       async  find  () {
         try {
             const query =   await UserModel.findAll();
             console.log ("quenry ejecutada k", query);
             if (query)   {
                 return {ok: true,   data: query };
             }
          }  catch  (e ) {
             console.log("error  al  e jercutar query ", e)
             return {ok: false, data :  null }
         }
      }

      async    findOne (  condition   =  {} ) {
         try {
              const query =   await UserModel.findOne  ({where: {username: condition.username} });

             if (query)  {
                 return  {ok: true,  data: query};
              }
         }  catch  (e) {
             console.log("weerror,  al  e jercutar query", e)
             return {ok: false, data :  null }
         }
      }

     async createUser (id, nombre, apellido, email, username  , password, foto, profesion, descripcion ) {
         try  {
             const query = await  UserModel.create({
                 id: id,
                 nombre: nombre,
                 apellido: apellido,
                 email: email,
                  username: username,
                  password: password,
                 foto: foto ,
                 profesion: profesion,
                 descripcion: descripcion
             });
             if (query) {
                 return {ok: true, data: query}
             }
         } catch (e) {
              return {ok: false, data: null}
         }
     }
 }

 export const UserQueries = new  userQueries();