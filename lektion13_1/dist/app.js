import { MyCar, NewCar } from "./objects.js";
const initApp = () => {
    console.log(MyCar);
    console.log("New Car", NewCar);
    const Ford = {
        options: {
            id: 1,
            manufacturer: "Ford",
            model: "Fokus",
            modelYear: 2017,
            milage: 25000,
            color: "yellow"
        },
        startEngine() {
            return "Vroom";
        },
    };
    console.log(Ford);
};
document.addEventListener("DOMContentLoaded", initApp);
