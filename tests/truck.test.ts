import LightContainer from "../src/lightcontainer";
import ShippingContainer from "../src/shippingcontainer";
import HeavyContainer from "../src/heavycontainer";
import Truck from "../src/truck";

describe("Truck tests", function() {
    test("The maxWeight property is set from the constructor parameter", function() {
        let newTransporter: Truck = new Truck(5000);
        expect(newTransporter.maxWeight).toEqual(5000);
    });
    test("The container property is set to null in a new Truck instance", function() {
        let newTransporter: Truck = new Truck(5000);
        expect(newTransporter).toEqual({maxWeight: 5000, container: null});
    });
    test("Calling addContainer sets the container property", function() {
        let newTransporter: Truck = new Truck(5000);
        let newContainer: ShippingContainer = new LightContainer("San Diego", 3000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.container).toEqual(newContainer);
    });
    test("getTotalWeight returns the gross weight of the container when a container is added", function() {
        let newTransporter: Truck = new Truck(5000);
        let newContainer: ShippingContainer = new LightContainer("San Diego", 3000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.getTotalWeight()).toEqual(3000);
    });
    test("keep testing get total weight with different containers", function() {
        let newTransporter: Truck = new Truck(5000);
        let newContainer: ShippingContainer = new LightContainer("San Diego", 3000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.getTotalWeight()).toEqual(3000);
    });
    test("keep testing get total weight with different containers", function() {
        let newTransporter: Truck = new Truck(10000);
        let newContainer: HeavyContainer = new HeavyContainer(6000, "San Diego", 3000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.getTotalWeight()).toEqual(9000);
    });
    test("getTotalWeight returns 0 when container is null", function() {
        let newTransporter: Truck = new Truck(10000);
        let newContainer: LightContainer = new LightContainer("San Diego");
        newTransporter.addContainer(newContainer);
        expect(newTransporter.getTotalWeight()).toEqual(0);
    });
    test("isOverweight returns true when the total weight is greater than maxWeight", function() {
        let newTransporter: Truck = new Truck(1000);
        let newContainer: LightContainer = new LightContainer("San Diego", 5000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.isOverweight()).toEqual(true);
    });
    test("isOverweight returns false when the total weight is less than maxWeight", function() {
        let newTransporter: Truck = new Truck(10000);
        let newContainer: LightContainer = new LightContainer("San Diego", 5000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.isOverweight()).toEqual(false);
    });
    test("isOverweight returns false when the total weight is equal to maxWeight", function() {
        let newTransporter: Truck = new Truck(1000);
        let newContainer: LightContainer = new LightContainer("San Diego", 1000);
        newTransporter.addContainer(newContainer);
        expect(newTransporter.isOverweight()).toEqual(false);
    });
});
