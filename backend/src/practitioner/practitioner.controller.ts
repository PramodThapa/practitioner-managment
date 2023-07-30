import { AuthGuard } from '@nestjs/passport';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { PractitionerService } from './practitioner.service';

import { Practitioner } from './schemas/practitioner.schema';

import { CreatePractitionerDto } from './dto/create-practitioner.dto';
import { UpdatePractitionerDto } from './dto/update-practitioner.dto';

@Controller('/v1/practitioners')
@UseGuards(AuthGuard('access-jwt'))
export class PractitionerController {
  constructor(private readonly practitionerService: PractitionerService) {}

  /**
   * Endpoint to get all the practitioners.
   *
   * @returns {Practitioner[]}
   */
  @Get()
  async findAll(): Promise<Practitioner[]> {
    return this.practitionerService.findAll();
  }

  /**
   * Endpoint to get all the practitioners.
   *
   * @returns {Practitioner[]}
   */
  @Post()
  async create(
    @Body() practitioner: CreatePractitionerDto,
  ): Promise<Practitioner> {
    return this.practitionerService.create(practitioner);
  }

  /**
   * Endpoint to update practitioner.
   *
   * @returns {Practitioner}
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() practitioner: UpdatePractitionerDto,
  ): Promise<Practitioner> {
    return this.practitionerService.update(id, practitioner);
  }

  /**
   * Endpoint to delete practitioner.
   *
   * @returns {Practitioner[]}
   */
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Practitioner> {
    return this.practitionerService.delete(id);
  }
}
