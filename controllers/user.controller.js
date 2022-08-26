import {request  , response }  from "express" ;
import  {UserQueries } from "../queries/user.queries.js"
import { Payload} from "../helpers/payload.js";
import {encrypt} from "../helpers/handleBcrpt.js"
import {Telegraf} from "telegraf";
import App from "../config/config.js"
import {SkillQueries} from "../queries/skill.queries.js";

class UserController  {

    static payload = new Payload( );

    async sayHello(request , response) {
        return response.status(200).json  ( {
            ok: true,
            message: 'hello '

            } )
     }

    async processData  (request  ,  response ){
        const body = request.body ;
        console.log('datr  flrom front', body);
    return response.status( 403 ).json({ok: true, message:    '  data received '});
}

    async create  ( req , response){
        const body = req.body;
         console.log(body  )
        const query =  await UserQueries.store(body) ;
        if ( query.ok   ) {
            return response.status(200).json({ok: true,   data: query.data});
        }else {
            return   response.status(403).json({ok: false, message: 'error en  .jk{rccess'});
        }

       }


       async  findAll ( req  , response ) {
          const body =  req.body;
          console.log(" bodyg : ", body )
           const  condition  = body.condition ;
        const query = await   UserQueries.find ();
        console .log(query  )
        if (query.ok) {
            return response.status(200).json({ok: true, data:  query.data})
        }
        else   {
            return response.status(403).json({ok: false,  message: 'error on process rqeques'})
         }
     }

     async login   (req, res ) {
         const body = req.body ;
         console.log ("bodydf: lkp",   body)
          const query =  await UserQueries.findOne({
              username:  body.username    ,
              password: body.password
         })

          if (query ) {

             const pass  = await encrypt.comparePass  (body.password , query.data.password)

             if(pass) {
                 try {
                     const  token  = UserController.payload.createToken (query.data);
                     return res.status(200).send ({ok: true, data: query.data , token:  token  ,
                     })
                 } catch (e)  {
                     console.log("errord d",  e )
                     return res.status(403).send({
                         ok:  false,
                         data: null
                     }) ;
                 }
               }   else {
                 console.log("contradseña invalidad d")
                 return res.status(403).send  ({
                     ok: false,
                     data: null  ,
                 })
             }
         } else {
             console.log("usuarios invalidod d")
         }

    }

        async  sendTelegramMessage   (request ,  response ) {
             const  message   =    request.body  ;
           try {
               const  bot =  new  Telegraf(process.env.BOT)



                await  bot.telegram. sendMessage ( 1976750044,  message.message   )


                 return response.status( 200).send({
                  ok: true ,
                  data: null
              } )

              } catch  (e) {
                console.log(" errror en tedlegr ,aff bot ", e)
               return response.status(400).send({
                   ok: false,
                   data: null
               })
             }

      }

     async    receivedTelegramMessage      (request ,  response  ) {

             const  bot =   new  Telegraf(process.env.BOT )

           const data = await bot.telegram

            const res = await App.getMessage();

         return response.status(200).json({content: res  })

     }

      async   registro (request,   response) {

         const body = request.body;

        const  password  =   await encrypt.encrypt (body.password)


          const query = await   UserQueries.createUser(body.id, body.nombre, body.apellido,  body.email, body.username,  password, body.foto, body.profesion, body.descripcion  )

         if (query) {
            return response.status(200).json({ok: true, data: query})
        }
        else  {
             return  response.status(403).json({ok: false, data:  null})
         }
    }
}

export const userController = new UserController(  ) ;


