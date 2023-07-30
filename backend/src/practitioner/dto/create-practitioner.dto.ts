import {
  IsInt,
  IsEnum,
  IsBoolean,
  IsDataURI,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Gender } from '../schemas/practitioner.schema';

export class CreatePractitionerDto {
  @IsNotEmpty({ message: 'Username is required.' })
  readonly name: string;

  @IsBoolean({ message: 'ICU Specialist must be of Boolean.' })
  @IsOptional()
  readonly isICUSpecialist: boolean = false;

  @IsEnum(Gender, {
    message: 'Gender must have value of (Male/Female/Others). ',
  })
  @IsNotEmpty({ message: 'Gender is required.' })
  readonly gender: Gender;

  @IsNotEmpty({ message: 'Contact is required!' })
  readonly contact: number;

  @IsNotEmpty({ message: 'Start date is required.' })
  readonly startDate: Date;

  @IsNotEmpty({ message: 'End date is required.' })
  readonly endDate: Date;

  @IsNotEmpty({ message: 'Working days is required.' })
  @IsInt({ message: 'Working days must be an integer.' })
  readonly workingDays: number;

  @IsNotEmpty({ message: 'DOB is required.' })
  readonly dob: Date;

  @IsDataURI({ message: 'Please provide valid URI.' })
  @IsOptional()
  readonly imageURL: string;
}
