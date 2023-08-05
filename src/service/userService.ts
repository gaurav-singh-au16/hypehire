import { UserRepository } from '../repository/userRepository';
import bcrypt from 'bcrypt';


export class UserService {

    static async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    static async getUserById(id: Number) {
        return await UserRepository.getUserById(id);
    }

    static async addNewUser(userData) {
        function isEmailValid(email: string): boolean {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
          }
        if (!userData.firstName) {
            return { success: false, message: 'First Name Not Present' }
        } else if (!userData.email) {
            return { success: false, message: 'email Not Present' }
        }else if(!isEmailValid(userData.email)){
            return { success: false, message: 'email Format Invalid' }
        } else if (!userData.password) {
            return { success: false, message: 'password Not Present' }
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(userData.password, salt);

            let newUserData = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: hashedPassword
            }
            return await UserRepository.addNewUser(newUserData);
        }
    }

}
