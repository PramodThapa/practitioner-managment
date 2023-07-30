import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PractitionerService } from './practitioner.service';
import { PractitionerController } from './practitioner.controller';

import { PractitionerSchema } from './schemas/practitioner.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'Practitioner', schema: PractitionerSchema },
    ]),
  ],
  controllers: [PractitionerController],
  providers: [PractitionerService],
})
export class PractitionerModule {}
