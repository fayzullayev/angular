import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  console.log(userService.getUser());
  return false;
};
