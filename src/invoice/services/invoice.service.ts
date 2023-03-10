import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';

@Injectable()
export class InvoiceService {
private facturas : CreateInvoiceDto[] = [
        {
            "uuid": "1",
            "nombre": "Juan Iturbide",
            "rut": "35621324",
            "invoice_detail": [
                {
                    "idDetail": "a01",
                    "cantidad": 10,
                    "detail": "Zapato de Goma",
                    "precio": 1000
                }
            ]
        },
        {
            "uuid": "2",
            "nombre": "Maria Perez",
            "rut": "099073927",
            "invoice_detail": [
                {
                    "idDetail": "a02",
                    "cantidad": 5,
                    "detail": "Zapato para dama",
                    "precio": 1200
                }
            ]
        }
];

 getAll(){
    return this.facturas;
} 
getOne(uuid: string){
    return this.facturas.find(id => id.uuid === uuid);
} 
createFactura(agregar: CreateInvoiceDto) {
    return this.facturas.push(agregar);
  } 
deleteFactura(id: string){
 this.facturas = this.facturas.filter(factura => factura.uuid != id )
}



updateFactura(uuid: string, updatedFields: UpdateInvoiceDto) {
    const factura = this.getOne(uuid);
    
    if (!factura) {
      throw new Error(`La factura con uuid ${uuid} no existe`);
    }
    
    const newFactura = { ...factura, ...updatedFields };
    
    this.facturas = this.facturas.map(factura=> factura.uuid === uuid ? newFactura : factura);
    
    return newFactura;
  }
 putFactura(uuid: string, updatedFields: UpdateInvoiceDto): UpdateInvoiceDto {
    const factura = this.getOne(uuid);
    
    if (!factura) {
      throw new Error(`La factura con uuid ${uuid} no existe`);
    }
    
    const newFactura = { ...factura, ...updatedFields };
    
    this.facturas = this.facturas.map(factura=> factura.uuid === uuid ? newFactura : factura);
    
    return newFactura;
  } 
}