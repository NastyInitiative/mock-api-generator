import { SignatureService } from './services/signature.service';
import { ApiSignatureController } from './api/api-signature.controller';
import { CustomersService } from './services/customers.service';
import { ContractsService } from './services/contracts.service';
import { ApiCustomerController } from './api/api-customer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDocsController } from './api/api-docs.controller';
import { ApiContractsController } from './api/api-contracts.controller';
import { DataService } from './services/data.service';

@Module({
  imports: [],
  controllers: [
    ApiSignatureController,
    ApiCustomerController,
    AppController,
    ApiDocsController,
    ApiContractsController,
  ],
  providers: [
    SignatureService,
    CustomersService,
    ContractsService,
    AppService,
    DataService,
  ],
})
export class AppModule {}
