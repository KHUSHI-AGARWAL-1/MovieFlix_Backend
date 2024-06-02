const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors');
dotenv.config();
const userRoutes = require('./routes/userroutes')
const watchRoutes = require('./routes/watchlist')
const PORT = process.env.PORT || 8000
const app = express();

mongoose.set('strictQuery', false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected');
    }
    catch (err) {
        console.log(err);

        console.log('Database Connection failed');

    }
}
app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome")
})
app.use(cors());

app.use('/users', userRoutes);
app.use('/watchlist', watchRoutes);

app.listen(PORT, () => {
    connect();
    console.log('Server Connected');

})
