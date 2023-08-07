import { UserEntity } from "../entity/userEntity";

const users: UserEntity[] = [];

export class UserRepository {
  static getAllUsers() {
    let user = UserEntity.findAll({
      attributes: ["id", "firstName", "lastName", "email"]
    })
    return user;
  }

  static getUserById(id: number) {
    let user = UserEntity.findOne({
      where: { id: id },
      attributes: ["id", "firstName", "lastName", "email"]
    })
    return user
  }

  static addNewUser(userData: { firstName: string; lastName: string; email: string; password: string; }) {
    let res = UserEntity.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    })
    return { success: true, data: res }
  }
}