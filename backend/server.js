const express= require('express');
const dotenv= require ('dotenv').config();
const connectDb= require('./config/db')
const port =process.env.port || 5000;
const { errorHandler} = require('./middleware/errorMiddleware')
const app=express();
connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, ()=> console.log(`server startted on port ${port}`)) 