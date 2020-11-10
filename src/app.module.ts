import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiDocsController } from './api/api-docs/api-docs.controller';
import { ApiContractsController } from './api/api-contracts/api-contracts.controller';
import { DataService } from './services/data/data.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    ApiDocsController, 
    ApiContractsController],
  providers: [AppService, DataService],
})
export class AppModule {}
