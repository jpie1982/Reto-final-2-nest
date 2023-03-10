import { Module } from '@nestjs/common';
import { InvoiceService } from './services/invoice.service';
import { InvoiceController } from './controller/invoice.controller';

@Module({
  providers: [InvoiceService],
  controllers: [InvoiceController]
})
export class InvoiceModule {}
