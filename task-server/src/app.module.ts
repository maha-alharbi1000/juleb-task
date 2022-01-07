import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicinesModule } from './medicines/medicines.module';


@Module({
  imports: [MedicinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
