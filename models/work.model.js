import  {Model , DataTypes} from "sequelize";
import {DatabaseConfig } from  "../config/database.js";


export class WorkModel extends Model {  }

WorkModel.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false  ,
        primaryKey: true,
        autoIncrement: true
    },
    empresa : {
        type:  DataTypes.STRING( 100 ),
        allowNull: false,
    },
    fecha : {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    descripcion: {
        type:  DataTypes.STRING(100),
        allowNull: false,
    },
     logo: {
        type: DataTypes.STRING(100 ),
        allowNull: false ,
    }
}  , {
    sequelize: DatabaseConfig,
    tableName : 'work',
    timestamps: false  ,
} )
