import { Country } from '../architecture/enums/Country';
import { Gender } from '../architecture/enums/Gender';
import { IUser } from '../architecture/interfaces/IUser';

export class User implements IUser {
  firstName: string;
  lastName: string;
  age: number;
  country: Country;
  gender: Gender;

  constructor({ firstName, lastName, age, gender, country }: IUser) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.gender = gender;
  }
}