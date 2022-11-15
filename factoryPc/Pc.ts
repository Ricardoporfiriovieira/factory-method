import { Computer } from "./Computer";

class Pc extends Computer{
    constructor(ram:number, hdd:number, cpu:number, type:string){
        super();
        this.setRam(ram);
        this.setHdd(hdd);
        this.setCpu(cpu);
        this.setType(type);
    }

    public ligar(): void {
        console.log("Ligando PC");
    }
    public desligar(): void {
        console.log("Desligando PC");
    }
}

export { Pc };''