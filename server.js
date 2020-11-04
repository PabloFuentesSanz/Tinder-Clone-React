import express from "express";
import mongoose from "mongoose";
import cardRoutes from "./routes/cards.routes.js";
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

//import bodyParser from "body-parser";
//import cards from "./routes/cardsSchema.js";
import cors from "cors";
//App Configuration
const app = express();
const port = process.env.PORT || 4001;
const connection_url = `mongodb+srv://admin:4QsJY77lTbpmtbju@cluster0.lzcbn.mongodb.net/tinderDB?retryWrites=true&w=majority`;
const __dirname = dirname(fileURLToPath(import.meta.url))
//Middlewares
app.use(express.json()); //body-parser.json()
app.use(cors());

//DB config
(async () => {
  try {
    const db = await  mongoose.connect(connection_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database is connected to ${db.connection.name}`);
  } catch (err) {
    console.error(err);
  }
})();

//API Endpoints
app.use(cardRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../tinder-clone/build'));

  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'tinder-clone', 'build', 'index.html'));
  })
}

//Listener
app.listen(port, () => console.log(`Listen on port ${port}`));
