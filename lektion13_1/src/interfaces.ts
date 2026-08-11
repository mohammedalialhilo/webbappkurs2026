import { FixedVehicles } from "./objects.js";

export interface IVehicles {
    options: FixedVehicles;
    startEngine(): string;
}

interface IColor {
    color: string;
}