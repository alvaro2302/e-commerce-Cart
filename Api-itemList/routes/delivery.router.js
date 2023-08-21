const express = require('express');
const DeliveryService = require("../services/delivery.service");
const router = express.Router();
const service = new DeliveryService();
router.post("/",(req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    const body = req.body;
    const lineItems = body.lineItems;
    const codePostal =  body.codePostal;
    const lineItemsEstimatedDelivery =  service.getDeliveryEstimated(lineItems,codePostal);
    if (lineItemsEstimatedDelivery.notFoundCuponCode) {
        res.status(404).json({
            message:lineItemsEstimatedDelivery.message
        })
    }
    else {
        res.status(200).json({
            message: lineItemsEstimatedDelivery.message,
            data: lineItemsEstimatedDelivery.data
        })
    }
   
})
module.exports = router;