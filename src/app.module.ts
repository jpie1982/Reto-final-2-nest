import { Module } from '@nestjs/common';

import { InvoiceController } from './invoice/controller/invoice.controller';
import { InvoiceService } from './invoice/services/invoice.service';
import { CustomerController } from './customer/controller/customer.controller';
import { CustomerService } from './customer/services/customer.service';

@Module({
  imports: [],
  controllers: [InvoiceController, CustomerController],
  providers: [InvoiceService, CustomerService],
})
export class AppModule {}
