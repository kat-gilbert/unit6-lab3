import ShippingContainer from "./shippingcontainer";
import Container from "./shippingcontainer";

interface Transporter {
    maxWeight: number;
    container: ShippingContainer | null;

    addContainer(container: Container): void;

    getTotalWeight(): number;

    isOverweight(): boolean;
}

export default Transporter;

