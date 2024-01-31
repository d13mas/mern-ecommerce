import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5001; // fallback only if the variable does not exist

connectDB(); // Connecting to Mongo

const app = express();

app.get('/api', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
