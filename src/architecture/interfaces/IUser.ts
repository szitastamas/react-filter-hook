import { Country } from "../enums/Country";
import { Gender } from "../enums/Gender";
import { Membership } from "../enums/Membership";

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  country: Country
  gender: Gender
}

export interface IMember extends IUser {
  membership: Membership;
  joinedAt: Date;
  memberFor: number;
}

export type IMemberInitialization = Omit<IMember, 'memberFor'>