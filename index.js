const express = require('express');
const path = require('path')
//const router = require('router')


const logger1 = require('./middleware/logger1')

const app = express();

//init middleware
app.use(logger1);

//set a static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members' , require('./route/api/members'));

/*app.get('/',(req , res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});*/

const PORT = process.env.PORT || 5000;              // Define port 

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
