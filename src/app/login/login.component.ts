import { User } from './../services/user';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  model: User = new User();
  ngOnInit(): void {
  }

  login(form: NgForm){
    this.accountService.login(this.model)
  }

}
