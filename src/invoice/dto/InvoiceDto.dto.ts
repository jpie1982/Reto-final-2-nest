import { InvoiceDetailsDto } from "./InvoiceDetailsDto.dto";

export class CreateInvoiceDto { 
uuid : string;
nombre: string;
rut: string;
invoice_detail: InvoiceDetailsDto[];
}


export class UpdateInvoiceDto { 
    uuid? : string;
    nombre?: string;
    rut?: string;
    invoice_detail?: InvoiceDetailsDto[];
    }