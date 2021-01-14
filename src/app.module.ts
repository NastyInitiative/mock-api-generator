import { SupportUiController } from './api/support-ui-api/support-ui.controller';
import { PackagesService } from './services/support-ui-services/packages.service';
import { ApiPersonController } from './api/feu-ui-api/api-person.controller';
import { PersonService } from './services/feu-ui-services/person.service';
import { SignatureService } from './services/digital-ui-services/signature.service';
import { ApiSignatureController } from './api/digital-ui-api/api-signature.controller';
import { CustomersService } from './services/digital-ui-services/customers.service';
import { ContractsService } from './services/digital-ui-services/contracts.service';
import { ApiCustomerController } from './api/digital-ui-api/api-customer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDocsController } from './api/digital-ui-api/api-docs.controller';
import { ApiContractsController } from './api/digital-ui-api/api-contracts.controller';
import { DataService } from './services/data.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiLocationController } from './api/feu-ui-api/api-location.controller';
import { LocationService } from './services/feu-ui-services/location.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [
    SupportUiController,
    ApiPersonController,
    ApiSignatureController,
    ApiCustomerController,
    AppController,
    ApiDocsController,
    ApiContractsController,
    ApiLocationController,
  ],
  providers: [
    PackagesService,
    PersonService,
    SignatureService,
    CustomersService,
    ContractsService,
    AppService,
    DataService,
    LocationService,
  ],
})
export class AppModule {}
