import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
// mongodb+srv://anmol7:mongodbanmolpj@cluster0.5mukfty.mongodb.net/?retryWrites=true&w=majority
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import picasoRoutes from './routes/picasoRoutes.js'

dotenv.config();

const app = express();
app.use(cors()); //middleware
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/picaso',picasoRoutes);

app.get('/', async (req,res) => {
    res.send('Hello from Picaso');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080,() => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error); 
    }
}

startServer();