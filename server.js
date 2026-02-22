require('dotenv').config();
const express =require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');
mongoose.connect(process.env.CONECTION_MONGO)
    .then(() => {
        console.log('conectado aqui');
      app.emit('conectado!');
    }).catch(e=>{console.log(e)})

const session=require('express-session');
const MongoStore=require('connect-mongo');
const flash =require('connect-flash');

const routes=require('./routes.js')
app.use(express.urlencoded({extended:true})); // pega as req por formularios

const sessionOptions={
    secret: process.env.sessionSenha,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.CONECTION_MONGO, 
        collectionName: 'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 *7
    }
};
app.use(session(sessionOptions));
app.use(flash());

app.set('views',path.resolve(__dirname,'src','views'));

app.set('view engine','ejs');

app.use(routes);

app.on('conectado!',()=>{
app.listen(3000,()=>{
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
});
});
