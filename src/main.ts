import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  NestExpressApplication  } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  /* app.use('/scripts', app.useStaticAssets(join(__dirname, '..', 'node_modules/bootstrap/dist')))
  app.useStaticAssets(join(__dirname, '..', 'node_modules/bootstrap/dist')) */
  app.useStaticAssets(join(__dirname, '..', 'ui'));
  
  app.setBaseViewsDir(join(__dirname, '..', 'ui'));
  app.setViewEngine('hbs');
  
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
