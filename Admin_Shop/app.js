const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));
const control_404=require('./controllers/404control.js')

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(control_404.control);

app.listen(3000);
