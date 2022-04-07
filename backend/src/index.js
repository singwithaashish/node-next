import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import blogsRoutes from './routes/blogs.js';
import cors from 'cors';
import usersRoutes from './routes/users.js';
import notificationRoute from './routes/notifications.js';
// express app
const app = express();

// console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PAWD}@cluster0.ovptt.mongodb.net/blog_app?retryWrites=true&w=majority`)
const DBURI = `mongodb+srv://singwithaashish:root0000@cluster0.ovptt.mongodb.net/blog_app?retryWrites=true&w=majority`;




// get the port from the environment, i.e. Heroku sets it
const PORT = process.env.PORT || 5000;

// middleware to parse the body of the request
app.use(bodyParser.json());


// connect to backend using the db uri
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Listening on ${PORT}`)))
.catch(err => console.log(err));

// rest api
app.use(cors());
app.get('/', (req, res) => {res.redirect('/blogs')})
app.use('/blogs', blogsRoutes)
app.use('/users', usersRoutes)
app.use('/notifications', notificationRoute)
