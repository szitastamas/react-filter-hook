import { Membership } from '../architecture/enums/Membership';
import { IMember, IMemberInitialization } from '../architecture/interfaces/IUser';
import { User } from './User';

export class Member extends User implements IMember {
  joinedAt: Date;
  membership: Membership;

  constructor({ joinedAt, membership, ...rest }: IMemberInitialization) {
    super(rest);
    this.joinedAt = joinedAt!;
    this.membership = membership!;
  }

  get memberFor() {
    const milliseconds = Math.abs(new Date().getTime() - this.joinedAt.getTime());
    return milliseconds / (1000 * 60 * 60 * 24);
  }
}
