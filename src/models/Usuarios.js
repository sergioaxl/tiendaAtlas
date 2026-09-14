import { Schema, model } from "mongoose";

const UsuarioEsquema = new Schema(
    {
        nombre: {
            type: String, 
            required: true,
            trim: true,
        },
        apellidoPaterno: {
            type: String, 
            required: true,
            trim: true,
        },
        apellidoMaterno: {
            type: String, 
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        telefono: {
            type: String, 
            required: true,
            trim: true,
        },
        rol: {
            type: String, 
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Usuario", UsuarioEsquema);