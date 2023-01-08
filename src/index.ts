import "reflect-metadata";
import express from 'express';
const app = express();
import UserRoutes from './routes/user'




app.use('/user',UserRoutes);


app.listen(3000,() => {
 console.log(`Server is listening on port ${3000}`)
})

export default app