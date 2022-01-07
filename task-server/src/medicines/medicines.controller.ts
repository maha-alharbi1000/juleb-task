import { Controller, Get } from '@nestjs/common';
import { MedicinesService } from './medicines.service';

@Controller()
export class MedicinesController {
    constructor(private medicineService: MedicinesService) {}

    @Get()
    getMedicines() {
      return this.medicineService.getMedicines();
    }
}
