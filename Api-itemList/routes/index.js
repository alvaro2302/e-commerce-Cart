const itemsRouter = require("./items.router");
const deliveryRouter = require("./delivery.router");
function routerApi(app){
    app.use('/items',itemsRouter);
    app.use('/delivery',deliveryRouter);
}
module.exports = routerApi;