export class MyClass {
    private _name: string;
    constructor(name: string) {
        this._name = name
    }
}

export type Vehicle = {
    readonly id: number;
    manufacturer: string;
    model: string;
    modelYear: number;
    milage: number;
};

type Color = {
    color: string;
}

export type FixedVehicles = Vehicle & Color;
export const MyCar: Vehicle = {
    id: 1,
    manufacturer: "Ford",
    model: "Fusion",
    modelYear: 2007,
    milage: 25000,

};
export const NewCar: FixedVehicles = {
    id: 1,
    manufacturer: "Ford",
    model: "Fusion",
    modelYear: 2007,
    milage: 25000,
    color: "red",

}
