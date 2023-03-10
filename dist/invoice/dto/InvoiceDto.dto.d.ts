import { InvoiceDetailsDto } from "./InvoiceDetailsDto.dto";
export declare class CreateInvoiceDto {
    uuid: string;
    nombre: string;
    rut: string;
    invoice_detail: InvoiceDetailsDto[];
}
export declare class UpdateInvoiceDto {
    uuid?: string;
    nombre?: string;
    rut?: string;
    invoice_detail?: InvoiceDetailsDto[];
}
