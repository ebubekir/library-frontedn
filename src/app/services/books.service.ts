import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Book } from '../books/book';
import { environment } from 'src/environments/environment';
@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }
  path = environment.apiUrl + '/books';
  getBooks(): Observable<Book[]>{

    return this.http.get<Book[]>(this.path)
      .pipe(
        catchError(this.handleError)
      )
  }
  getBook(bookId: string): Observable<Book>{
    return this.http.get<Book>(this.path + '/detail/' + bookId)
          .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
          )
  }
  addBook(book: Book): Observable<Book>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<Book>(this.path + "/add", book, httpOptions )
          .pipe(
            tap( data=> console.log(JSON.stringify(data))),
            catchError(this.handleError)
          )
  }
  updateBook(book: Book): Observable<Book>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(this.path + '/update/' + book.id);
    return this.http.put<Book>(this.path + '/update/' + book.id,book, httpOptions)
          .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
          )
  }

  deleteBook(id:string) {
    this.http.delete(this.path + '/delete/' + id)
    .subscribe(()=> { console.log('Deleted succesfull') })
 }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured: ' + err.error.message;
    } else {
      errorMessage = 'Error!';
    }
    return throwError(errorMessage);

  }
}
