import { BookRepository } from '../repository/bookRepository';

export class BookService {

  static async getAllBooks() {
    return await BookRepository.getAllBooks();
  }

  static async getBookById(id: number) {
    return await BookRepository.getBookById(id);
  }

  static async addNewBook(bookData: { title: string; description: string; discountRate: number; price: number; coverImage: string; }) {
    function isDiscountRateValid(discountRate: number): boolean {
      return discountRate >= 1 && discountRate <= 99;
    }
    
    if (!bookData.title) {
      return { success: false, message: 'title Not Present' }
    } else if (!bookData.description) {
      return { success: false, message: 'description Not Present' }
    } else if (!bookData.discountRate) {
      return { success: false, message: 'Discount Rate Not Present' }
    } else if (!isDiscountRateValid(bookData.discountRate)) {
      return { success: false, message: 'Discount Rate Not Valid Must Be Inbetween 1-99' }
    } else if (!bookData.price) {
      return { success: false, message: 'Price Not Present' }
    } else {
      return BookRepository.addNewBook(bookData);
    }
  }


}
