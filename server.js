import express from 'express';
import router from './routes/userRoutes.js';
import cors from 'cors';
const app = express();
const router = express.Router()
//app.use('/', router);

app.use(cors("*"));

router.get("/",(req,res)=>{
    res.send("This is a test response")
})

app.listen();
