import Servidor from "./models/Servidor.js";
import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const servidor = new Servidor();
servidor.app.use( express.static( process.cwd()+'/public' ));
servidor.initServer();