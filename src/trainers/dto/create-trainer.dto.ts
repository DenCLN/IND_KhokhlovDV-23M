import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTrainerDto {
  @IsString()
  @MaxLength(100)
  firstName: string;

  @IsString()
  @MaxLength(100)
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @IsString()
  @MaxLength(200)
  specialization: string;

  @IsInt()
  @Min(0)
  @Max(80)
  experienceYears: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  about?: string;
}
