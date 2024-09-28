import { Controller, Get,Post,Param ,Body,Put, Delete} from '@nestjs/common';
import { BookService } from './app.service';
import Book from './FakeDatabase';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  @Get()
  getMyRequest():Book[]{
    return this.BookService.getMyRequest()
  }
  @Get('getById/:id')
  getBookById(@Param('id') id:string):Book | undefined {
     const bookID=+id
     return this.BookService.findById(bookID)
  }
  @Post()
  addBook(@Body() book:Partial<Book>):Book | undefined {
     const bookData=book
     if(!book.author || !book.publication || !book.title) return undefined
     return this.BookService.create(bookData)
  }
  @Put(':id')
  updateBook(@Param('id') id:string ,@Body() book:Partial<Book>):Book | undefined{
      return this.BookService.update(+id,book)
  }
  @Delete(':id')
  deleteBook(@Param('id') id:string):Book[]{
         return this.BookService.deleteBook(+id)
  }

    
}
 