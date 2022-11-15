import { Pc } from "./Pc";
import { Server } from "./Server";

class FactoryComputer{
    public createComputer(ram:number, hdd:number, cpu:number, type:string){
        if(type.toUpperCase() === 'PC'){
            return new Pc(ram, hdd, cpu, type);
        }
        if(type.toUpperCase() === 'SERVER'){
            return new Server(ram, hdd, cpu, type);
        }
    }
}

export { FactoryComputer };