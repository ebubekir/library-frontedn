import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
const routes: Routes = [
  { path:'', redirectTo: 'books', pathMatch: 'full' },
  { path:'books', component:BooksComponent },
  { path:'books/add', component:AddBookComponent, canActivate:[LoginGuard]},
  { path:'books/edit/:bookId', component:EditBookComponent},
  { path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
