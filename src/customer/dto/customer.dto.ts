
export class CreateCustomerDto{
    uuid: string;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
} 

export class UpdateCustomerDto{
    nombre?: string;
    direccion?: string;
    telefono?: string;
    email?: string;
}