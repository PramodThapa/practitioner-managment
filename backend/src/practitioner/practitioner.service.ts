import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';

import { Practitioner } from './schemas';
import { CreatePractitionerDto, UpdatePractitionerDto } from './dto';

@Injectable()
export class PractitionerService {
  constructor(
    @InjectModel(Practitioner.name)
    private practitionerModel: mongoose.Model<Practitioner>,
  ) {}

  /**
   * Get all the practitioners.
   *
   * @returns {Practitioner[]}
   */
  async findAll(): Promise<Practitioner[]> {
    const practitioners = await this.practitionerModel.find();

    return practitioners;
  }

  /**
   * Function to create practitioner.
   *
   * @param createPractitioner - Create practitioner Dto.
   * @returns {Practitioner}
   */
  async create(
    createPractitioner: CreatePractitionerDto,
  ): Promise<Practitioner> {
    const practitioner = await this.practitionerModel.create(
      createPractitioner,
    );

    return practitioner;
  }

  /**
   * Function to update practitioner.
   *
   * @param updatePractitioner - Create practitioner Dto.
   * @returns {Practitioner}
   */
  async update(
    id: string,
    updatePractitioner: UpdatePractitionerDto,
  ): Promise<Practitioner> {
    return await this.practitionerModel.findByIdAndUpdate(
      id,
      updatePractitioner,
      { new: true, runValidators: true },
    );
  }

  /**
   * Function to create practitioner.
   *
   * @param createPractitioner - Create practitioner Dto.
   * @returns {Practitioner}
   */
  async delete(id: string): Promise<Practitioner> {
    return await this.practitionerModel.findByIdAndDelete(id);
  }
}
