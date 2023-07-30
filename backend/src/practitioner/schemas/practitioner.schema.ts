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
  contact: number;

  @Prop()
  startData: Date;

  @Prop()
  endData: Date;

  @Prop()
  workingDays: number;

  @Prop()
  dob: Date;
}

export const PractitionerSchema = SchemaFactory.createForClass(Practitioner);
