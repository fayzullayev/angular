import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UserService);
  console.log(userService.getUser());

  myObservable.subscribe(
    (value) => {
      // Handle emitted values
    },
    (error) => {
      // Handle errors
    },
    () => {
      // Handle completion
    },
  );

  // try {
  //   const result = await myPromise(14);
  //   console.log('My Result --- ', result);
  // } catch (err) {
  //   console.log('My Error --- ', err);
  // }

  return false;
};

const myPromise = (myNum: number) =>
  new Promise<number>((resolve, reject) => {
    if ([11, 12, 13].includes(myNum)) {
      setTimeout(() => {
        resolve(myNum);
      }, 1500);
    } else {
      setTimeout(() => {
        reject(myNum);
      }, 2000);
    }
  });

const myObservable = new Observable((observer) => {
  // Asynchronous operation(s)
  // Emit values using

  // try {
  //   const result = await myPromise(14);
  //   console.log('My Result --- ', result);
  // } catch (err) {
  //   console.log('My Error --- ', err);
  // }

  observer.next(33);
  // Complete the observable with
  observer.complete();
  // Handle errors with
  observer.error('You had an error');
});
