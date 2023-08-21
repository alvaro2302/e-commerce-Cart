const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3005;

app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:`http://localhost:${port}`, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors({
    origin: "*"
}));
routerApi(app);

app.listen(port, ()=> {
    console.log("My port: " + port )
})