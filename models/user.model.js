import  {Model, DataTypes} from "sequelize";
import {DatabaseConfig } from "../config/database.js";

export class UserModel extends Model  {  }
    UserModel.init (  {
         id:  {
            type: DataTypes.INTEGER  ,
            allowNull:  false,
            primaryKey: true    ,
            autoIncrement: true
           } ,
         nombre: {
             type  :DataTypes.STRING(25),
            allowNull: false
        },
         apellido: {
             type:  DataTypes.STRING(25),
            allowNull: false
        },
        email: {
             type: DataTypes.STRING(25),
            allowNull: false,
        },
        username: {
             type: DataTypes.STRING(25),
             allowNull :  false,
        },
         password: {
          type: DataTypes.STRING(200) ,
          allowNull: false
        } ,

          foto: {
          type: DataTypes.STRING(200),
          allowNull: false
          },

      profesion: {
          type:  DataTypes.STRING(200),
          allowNull: false
      },
        descripcion: {
             type: DataTypes.STRING(900),
            allowNull:      false
        }
    }, {
         sequelize:   DatabaseConfig,
        tableName : 'perfil' ,
        timestamps: false  ,
    }
) ;
