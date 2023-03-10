import { Injectable } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';

@Injectable()
export class CustomerService {
private clientes : CreateCustomerDto[] = [

    {
        "uuid": "1",
        "nombre": "Lionel Messi",
        "direccion": "Roldan 1910 ,entre 4 y 5",
        "telefono": "099073927",
        "email": "jpie1982@gmail.com"
    },
    {
        "uuid": "2",
        "nombre": "Roberto Carlos",
        "direccion": "Calle amigos al 1000",
        "telefono": "091713327",
        "email": "RC1000@gmail.com"
    }



]
getAll(){
    return this.clientes;
}
getOne(uuid : string){
    return this.clientes.find(id => id.uuid === uuid);
}

createCliente(agregar: CreateCustomerDto){
    return this.clientes.push(agregar);
}

deletecliente(id : string){
    this.clientes = this.clientes.filter(clientes =>clientes.uuid !=id );
}

updateCliente(uuid : string, updatedFields : UpdateCustomerDto){
    const cliente = this.getOne(uuid);
    if (!cliente) {
        throw new Error(`La factura con uuid ${uuid} no existe`);
      }
    const newCliente = {...cliente, ...updatedFields};
    this.clientes = this.clientes.map(cliente => cliente.uuid === uuid ? newCliente : cliente);
    return newCliente;
}
putCliente(uuid : string, updatedFields : UpdateCustomerDto){
    const cliente = this.getOne(uuid);
    if (!cliente) {
        throw new Error(`La factura con uuid ${uuid} no existe`);
      }
    const newCliente = {...cliente, ...updatedFields};
    this.clientes = this.clientes.map(cliente => cliente.uuid === uuid ? newCliente : cliente);
    return newCliente;
}
}