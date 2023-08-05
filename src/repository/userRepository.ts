import { UserEntity } from "../entity/userEntity";

const users: UserEntity[] = [];

export class UserRepository {
  static getAllUsers() {
    let user = UserEntity.findAll({
      attributes: ["id", "firstName", "lastName", "email"]
    })
    return user;
  }

  static getUserById(id) {
    let user = UserEntity.findOne({
      where: { id: id },
      attributes: ["id", "firstName", "lastName", "email"]
    })
    return user
  }

  static addNewUser(userData) {
    let res = UserEntity.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    })
    return { success: true, data: res }
  }
}