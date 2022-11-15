import { Computer } from './Computer';

class Server extends Computer{
    constructor(ram:number, hdd:number, cpu:number, type:string){
        super();
        this.setRam(ram);
        this.setHdd(hdd);
        this.setCpu(cpu);
        this.setType(type);
    }

    public ligar(): void {
        console.log("Ligando SERVER");
    }
    public desligar(): void {
        console.log("Desligando SERVER");
    }
}

export { Server };