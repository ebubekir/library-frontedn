import { Book } from './../book';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [BooksService]
})
export class AddBookComponent implements OnInit {

  constructor(private booksService: BooksService, private location: Location) { }
  title = "Add Book"
  model: Book = new Book();
  ngOnInit(): void {

  }
  add(form: NgForm) {
    console.log(form);
    this.booksService.addBook(this.model).subscribe(data => {
      console.log(data)
    });
    this.goBack();
  }
  goBack(){
    this.location.back();
  }
}
