import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    BookFilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
