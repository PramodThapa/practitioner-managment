import { Inject, Injectable } from '@nestjs/common';

import { UsersService } from '../users.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

/**
 * TODO: Refactor to make more dynamic with usage of generic.
 */

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  async validate(username: string): Promise<boolean> {
    const user = await this.usersService.findOne(username);

    if (user) return false;

    return true;
  }

  defaultMessage(): string {
    return 'Username already taken.';
  }
}

export function IsUsernameUnique() {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      validator: UniqueConstraint,
    });
  };
}
