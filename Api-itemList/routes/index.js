const itemsRouter = require("./items.router");

function routerApi(app){
    app.use('/items',itemsRouter);
    
}
module.exports = routerApi;