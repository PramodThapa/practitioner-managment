import {
  IsEnum,
  IsBoolean,
  IsDataURI,
  IsNotEmpty,
  IsOptional,
  ArrayNotEmpty,
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
  readonly contact: number | string;

  @IsNotEmpty({ message: 'Start date is required.' })
  readonly startDate: Date | string;

  @IsNotEmpty({ message: 'End date is required.' })
  readonly endDate: Date | string;

  @ArrayNotEmpty({ message: 'Working days is required.' })
  readonly workingDays: [string];

  @IsNotEmpty({ message: 'DOB is required.' })
  readonly dob: Date | string;

  @IsDataURI({ message: 'Please provide valid URI.' })
  @IsOptional()
  readonly imageURL: string;
}
