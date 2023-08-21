const estimatedDeliveries = require("../deliveryDates"); 
class DeliveryService {
    constructor(){
        this.estimatedDelivery = estimatedDeliveries;
    }
    getDeliveryEstimated(lineItems,codePostal){
        let idsWithDeliveryEstimated = {}
        let notFoundCuponCode = false; 
        const listIdEstimated = this.estimatedDelivery.filter((item)=>{
           if(item.postal === codePostal) {
            return item;
           }
        })
        if(!listIdEstimated.length) {
            notFoundCuponCode = true;
            const responseNotFound = {
                notFoundCuponCode,
                message:"not found cupon code",
            }
            return responseNotFound;
        }
        listIdEstimated.map((deliveryDate)=>{
            deliveryDate.ids.map((id)=>{
                idsWithDeliveryEstimated[id] = deliveryDate.estimatedDeliveryDate;
            })
        })


        lineItems.map((item)=>{
            if(idsWithDeliveryEstimated[item.id])
            {
                item["estimatedDeliveryDate"] = idsWithDeliveryEstimated[item.id];
            }
            else
            {
                item["estimatedDeliveryDate"] = "Dec 2 - Dec 15";
            }
            
        })
        const responseSuccess = {
            notFoundCuponCode,
            message:"lines items estimated",
            data: lineItems
        };
        return responseSuccess;

    }
}
module.exports = DeliveryService;