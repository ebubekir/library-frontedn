import { Book } from './../book';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [BooksService]
})
export class EditBookComponent implements OnInit {

  constructor(private booksService: BooksService
            , private activatedRoute: ActivatedRoute,
              private location: Location) { }
  model: Book = new Book();
  title = "Edit Book";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.booksService.getBook(params["bookId"]).subscribe( data => {
        this.model = data
      })
    });
  }

  update(form: NgForm){
    this.booksService.updateBook(this.model).subscribe(data => {
      console.log(data);
    })
    this.location.back();
  }

  goBack(){
    this.location.back();
  }

}
