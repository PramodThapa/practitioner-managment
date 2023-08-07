import {
  IsEnum,
  IsBoolean,
  IsDataURI,
  IsOptional,
  ArrayNotEmpty,
} from 'class-validator';
import { Gender } from '../schemas/practitioner.schema';

export class UpdatePractitionerDto {
  @IsOptional()
  readonly name: string;

  @IsBoolean({ message: 'ICU Specialist must be of Boolean.' })
  @IsOptional()
  readonly isICUSpecialist: boolean = false;

  @IsEnum(Gender, {
    message: 'Gender must have value of (Male/Female/Others).',
  })
  @IsOptional()
  readonly gender: Gender;

  @IsOptional()
  readonly contact: number;

  @IsOptional()
  readonly startDate: Date;

  @IsOptional()
  readonly endDate: Date;

  @IsOptional()
  @ArrayNotEmpty({ message: 'Working days must be an integer.' })
  readonly workingDays: string[];

  @IsOptional()
  readonly dob: Date;

  @IsDataURI({ message: 'Please provide valid URI.' })
  @IsOptional()
  readonly imageURL: string;
}
