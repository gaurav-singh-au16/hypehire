import { UserEntity } from "../entity/userEntity";

const users: UserEntity[] = [];

export class UserRepository {
  static getAllUsers() {
    return users;
  }

  static getUserById(id) {
    return users.find((user) => user.id === id);
  }

  static addNewUser(userData) {
    let res = UserEntity.create({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
    })
    return {success: true, data: res}
}
}