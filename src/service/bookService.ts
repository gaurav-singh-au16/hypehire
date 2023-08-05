import { BookRepository } from '../repository/bookRepository';

export class BookService {

  static async getAllBooks() {
    return await BookRepository.getAllBooks();
  }

  static async getBookById(id: Number) {
    return await BookRepository.getBookById(id);
  }

  static async addNewBook(bookData) {
    if(!bookData.title){
        return {success: false, message: 'title Not Present'}
    }else if(!bookData.description){
        return {success: false, message: 'description Not Present'}
    }else if(!bookData.discountRate){
        return {success: false, message: 'Discount Rate Not Present'}
    }else if(!bookData.price){
        return {success: false, message: 'Price Not Present'}
    }else{
        return await BookRepository.addNewBook(bookData);
    }
  }


}
