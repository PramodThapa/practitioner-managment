import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHERS = 'Others',
}

@Schema({ timestamps: true })
export class Practitioner {
  @Prop()
  name: string;

  @Prop()
  imageURL: string;

  @Prop()
  isICUSpecialist: boolean;

  @Prop()
  gender: Gender;

  @Prop()
  contact: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  workingDays: [string];

  @Prop()
  dob: string;
}

export const PractitionerSchema = SchemaFactory.createForClass(Practitioner);
