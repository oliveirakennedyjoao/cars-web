import CarDTO from "./CarDTO";

export default interface UserDTO{    
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    login: string;
    password: string;
    phone: string;
    cars: CarDTO[];
}