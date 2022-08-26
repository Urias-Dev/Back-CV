import  {Model , DataTypes} from "sequelize";
import {DatabaseConfig  } from  "../config/database.js";


export class EducationModel extends Model {  }

EducationModel.init ({
    id: {
         type: DataTypes.INTEGER,
        allowNull: false  ,
        primaryKey: true,
        autoIncrement: true
    },
    institucion: {
        type:  DataTypes.STRING( 100 ),
        allowNull: false,
    },
    especialidad: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fecha: {
        type:  DataTypes.STRING(100),
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}  , {
    sequelize: DatabaseConfig,
    tableName : 'education',
    timestamps: false  ,
} )
