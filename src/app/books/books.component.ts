import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService, private router: Router) { }
  title = "Books List";
  filterText = "";
  books: Book[] = [];
  ngOnInit(): void {
    this.bookService.getBooks().subscribe( data => this.books = data);
  }

  deleteBook(id: string){
    this.bookService.deleteBook(id);
    window.location.reload();
  }

}
