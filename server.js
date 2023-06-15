const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/config');
const port = process.env.PORT || 8080;

// config dotenv
dotenv.config()

//connection mongodb
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//route
app.get('/', (req, res) => {
  res.send('<h2>Server working</h2>');
});

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');
app.use('/api/products/', productRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/order', orderRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('<h1>Hello from Node server via nodemon</h1>')
  });
}

app.listen(port,()=>{
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
})