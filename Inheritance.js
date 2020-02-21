class  Vehicle {
    constructor(vehicleType){
        this.vehicleType = vehicleType;
    }
    present(){
        return 'I have a ' + this.vehicleType;
    }
}

class Car extends Vehicle{
    constructor(vehicleType, brand) {
        super(vehicleType);
        this.brand = brand;

    }
    show(){
        return this.present() + ", it is a " + this.brand;
    }
    present() {
        return super.present();
    }
}

module.exports = Car;
