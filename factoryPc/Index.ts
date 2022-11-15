import { FactoryComputer } from "./FactoryComputer";

let fabricaComputer = new FactoryComputer();

let pc = fabricaComputer.createComputer(4,2,1.6,'pc');

let server = fabricaComputer.createComputer(4,2,1.6,'server');

pc.toString();

