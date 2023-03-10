import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Patch, Put } from '@nestjs/common/decorators';
import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dto/customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly service: CustomerService) {}

@Get()
getAll(){
    return this.service.getAll();
}
@Get(':uuid')
getOne(@Param('uuid') id : string){
    return this.service.getOne(id);
}
@Post()
createCustomer(@Body()body: CreateCustomerDto){
return this.service.createCliente(body);
}
@Delete(':uuid')
deleteCliente(@Param('uuid') id : string){
    this.service.deletecliente(id);
}
@Patch(':uuid')
updateFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateCustomerDto){
 return this.service.updateCliente(id, updatedFields);
}


@Put(':uuid')
putFactura(@Param('uuid') id: string, @Body()updatedFields: UpdateCustomerDto){
 return this.service.updateCliente(id, updatedFields);
}
}



