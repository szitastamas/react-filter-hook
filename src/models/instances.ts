import { Country } from '../architecture/enums/Country';
import { Gender } from '../architecture/enums/Gender';
import { Membership } from '../architecture/enums/Membership';
import { Member } from './Member';
import { User } from './User';

export const users = [
  new User({ firstName: 'John', lastName: 'Doe', gender: Gender.Male, age: 35, country: Country.DE }),
  new User({ firstName: 'Jane', lastName: 'Doe', gender: Gender.Female, age: 32, country: Country.DE }),
  new Member({
    firstName: 'Robert',
    lastName: 'Robertson',
    gender: Gender.Male,
    age: 35,
    country: Country.HU,
    membership: Membership.Standard,
    joinedAt: new Date('2020-09-22'),
  }),
  new Member({
    firstName: 'Jake',
    lastName: 'Jackson',
    gender: Gender.Male,
    age: 41,
    country: Country.US,
    membership: Membership.Premium,
    joinedAt: new Date('2020-11-02'),
  }),
  new Member({
    firstName: 'Emilia',
    lastName: 'Müller',
    gender: Gender.Female,
    age: 35,
    country: Country.DE,
    membership: Membership.Premium,
    joinedAt: new Date('2018-11-03'),
  }),
  new Member({
    firstName: 'Clark',
    lastName: 'Cabbage',
    gender: Gender.Male,
    age: 21,
    country: Country.DE,
    membership: Membership.Standard,
    joinedAt: new Date('2020-09-22'),
  }),
];
