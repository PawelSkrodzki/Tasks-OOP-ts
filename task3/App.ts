import { v4 as uuid } from 'uuid';
import { validatePassword, isUserExistInAppList } from './utils';
import { User, IUser, AccessLevel } from './User';

const perms = {
  admin: 'ADMIN',
  user: 'USER'
};

interface IApp {
  id: string;
  users: IUser[];
  addUserToApp(user: IUser): void;
  changeUserAccessLevel(superUser: IUser, user: IUser, newAccessLevel: AccessLevel): void;
  changeUserPassword(superUser: IUser, user: IUser, newPassword: string): void;
}

class App implements IApp {
  public id: string;
  public users: IUser[];
  constructor() {
    this.id = uuid();
    this.users = [];
  }

  addUserToApp(user: IUser): void {
    if (!(user instanceof User)) {
      throw new Error(`${user} is not instance of class User`);
    }

    if (isUserExistInAppList(user, this.users)) {
      throw new Error(`${user} already exist in users list`);
    }

    this.users.push(user);
  }

  changeUserAccessLevel(superUser: IUser, user: IUser, newAccessLevel: AccessLevel): void {
    if (!isUserExistInAppList(superUser, this.users) && !isUserExistInAppList(user, this.users)) {
      throw new Error(`${superUser} does not exist in users list`);
    }

    if (!(superUser.accessLevel === 'ADMIN')) {
      throw new Error('SuperUser has to be ADMIN level');
    }

    const upperNewAccessLevel = newAccessLevel;
    const isAccessLevelExistInPerms = Object.values(perms).includes(upperNewAccessLevel);

    if (!isAccessLevelExistInPerms) {
      throw new Error('accessValue shuold be user or admin');
    }

    if (user.accessLevel === upperNewAccessLevel) {
      throw new Error(`This User has already accessLevel: ${upperNewAccessLevel}`);
    }

    user.accessLevel = upperNewAccessLevel;
  }

  changeUserPassword(superUser: IUser, user: IUser, newPassword: string): void {
    if (!(user instanceof User) && !(superUser instanceof User)) {
      throw new Error(`${user} is not instanceof class ${User}`);
    }

    if (!isUserExistInAppList(superUser, this.users) && !isUserExistInAppList(user, this.users)) {
      throw new Error(`${superUser} does not exist in users list`);
    }

    if (!(superUser.accessLevel === 'ADMIN')) {
      throw new Error(`${superUser} must be admin lvl`);
    }

    if (newPassword === user.password) {
      throw new Error('New password cannot be the same as old password');
    }

    validatePassword(newPassword);
    user.password = newPassword;
  }
}

export default App;
