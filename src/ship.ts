import ShippingContainer from "./shippingcontainer";
import Transporter from "./transporter";

class Ship implements Transporter {
    maxWeight: number;
    containers: ShippingContainer[] = [];

    constructor(maxWeight: number){
        this.maxWeight = maxWeight;
    }

    addContainer(container: ShippingContainer):void {
        this.containers.push(container);
    }

    getTotalWeight():number {
        let sumOfContainers = 0;
        if (this.containers.length = 0){
            return 0
        }

        for (let containerOption of this.containers) {
            sumOfContainers += containerOption.getGrossWeight();
        }
        return sumOfContainers;
    }    

    isOverweight(): boolean {
        if ( this.getTotalWeight() > this.maxWeight) {
            return true;
        }
        else {
            return false;
        }
    }
}



export default Ship;