import { Injectable } from '@nestjs/common';
import { Medicine } from '../entities/medicine.entitiy';

@Injectable()
export class MedicinesService {

    medicines: Medicine[] = [
        {
          id: 1,
          name: 'Aspirin',
          description: 'Aspirin, also known as acetylsalicylic acid, is a medication used to reduce pain, fever, or inflammation.'
        },
        {
          id: 2,
          name: 'Benadryl',
          description: 'It is an antihistamine mainly used to treat allergies. It can also be used for insomnia, symptoms of the common cold, tremor in parkinsonism, and nausea.'     
        },
        {
          id: 3,
          name: 'DayQuil',
          description: 'Temporarily relieves common cold & flu symptoms, including nasal congestion, cough due to minor throat and bronchial irritation, and sore throat'
        },
    ];

    getMedicines(): Medicine[]{
        return this.medicines;
    }

    findById(medicineId: number): Medicine{
        return this.medicines.find(medicine => medicine.id === medicineId);
    }
}
