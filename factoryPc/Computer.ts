import { IComputer } from "./IComputer";

abstract class Computer implements IComputer{
    private ram:number; 
    private hdd:number; 
    private cpu:number; 
    private type:string;

    public abstract ligar():void;
    public abstract desligar():void;

    public getRam(){
        return this.ram;
    }
    public setRam(ra:number){
        this.ram = ra;
    }

    public getHdd(){
        return this.hdd;
    }
    public setHdd(hd:number){
        this.hdd = hd;
    }

    public getCpu(){
        return this.cpu;
    }
    public setCpu(cp:number){

    }

    public getType(){
        return this.type;
    }
    public setType(ty){
        this.type = ty;
    }
}

export { Computer };