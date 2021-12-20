import ShippingContainer from "./shippingcontainer";
import Transporter from "./transporter";
// import getGrossWeight from "./shippingcontainer";

class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null;

    constructor(maxWeight: number) {
        this.maxWeight = maxWeight;
    }

    addContainer(container: ShippingContainer): void {
        this.container = container;
    }

    getTotalWeight(): number {
        if (this.container === null) {
            return 0;
        }
        else {
            return this.container.getGrossWeight();
        }
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

export default Truck;