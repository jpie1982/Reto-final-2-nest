import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InvoiceService } from '../services/invoice.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto/InvoiceDto.dto';

@Controller('invoice')
export class InvoiceController {
constructor(private readonly service: InvoiceService) {}

@Get()
getAll(){
    return this.service.getAll();
  }
  
@Get(':uuid')
getOne(@Param('uuid') id: string){
  return this.service.getOne(id)
}

@Post()
  createFactura(@Body() body: CreateInvoiceDto) {
    return this.service.createFactura(body);
  }

 @Delete(':uuid')
 deleteFactura(@Param('uuid') id:string){
  this.service.deleteFactura(id)
 }

 @Patch(':uuid')
 updateFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateInvoiceDto){
  return this.service.updateFactura(id, updatedFields);
 }


 @Put(':uuid')
 putFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateInvoiceDto){
  return this.service.updateFactura(id, updatedFields);
 }
}


