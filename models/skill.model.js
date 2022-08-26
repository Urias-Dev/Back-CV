import  {Model , DataTypes} from "sequelize";
import {DatabaseConfig  } from "../config/database.js";


export class SkillModel  extends Model {  }

    SkillModel.init ({
        id:  {
              type: DataTypes.INTEGER,
             allowNull: false ,
            primaryKey: true,
            autoIncrement: true
         },
        lenguaje  : {
            type:  DataTypes.STRING( 25 ),
            allowNull: false,
        },
        porcentaje: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
         logo: {
             type:  DataTypes.STRING  (100),
            allowNull: false
        }
 }   ,  {
        sequelize: DatabaseConfig,
        tableName : 'skills',
        timestamps: false  ,
})
